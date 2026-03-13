/* ═══════════════════════════════════════════════════════════════
   CHAR-SLOTS.JS  v3 — Clean Architecture

   Core principle:
   • S always holds the ACTIVE character's per-char keys
   • charSlots[] is the persistent store — saved on every rebuild
   • buildPosText reads from charSlots[], never from S directly
   • buildPosGroups patched to show combined multi-char chips
   • csSwitchTo: save S→old slot, load new slot→S, repaint UI only
     NO rebuild() call — the prompt does NOT change on tab switch
═══════════════════════════════════════════════════════════════ */

var CHAR_KEYS = [
  '_name','_age',
  'age','skin','body',
  'hairColor1','hairColor2','hairstyle',
  'eyeColor','eyeShape',
  'clothing','clothingColor',
  'clothingTop','clothingTopColor',
  'clothingBottom','clothingBottomColor',
  'clothingAcc','clothingAccColor','clothingCondition','bodyParts',
  'sockColor','sockLength','shoes','shoeColor','faceAcc','faceAccColor',
  'nsfwTop','nsfwTopColor','nsfwBottom','nsfwBottomColor',
  'nsfwClothing','nsfwClothingColor',
  'expression','poses','effects','liquids',
  'weapons','props','electronics','otherItems',
  'nsfwBody','nsfwPose','nsfwFluid','nsfwIndicator'
];

var GENDER_TAG = { female:'1girl', male:'1boy' };
var CS_GCOLOR  = { female:'#f472b6', male:'#60a5fa' };
var CS_GICON   = { female:'👩', male:'👨' };

var charSlots  = [null, null];
var activeChar = 0;

/* Array keys in CHAR_KEYS — everything else is null (scalar) */
var CHAR_ARRAY_KEYS = {
  clothingAcc:1, clothingCondition:1, bodyParts:1, faceAcc:1,
  poses:1, effects:1, liquids:1,
  weapons:1, props:1, electronics:1, otherItems:1,
  nsfwBody:1, nsfwClothing:1, nsfwPose:1, nsfwFluid:1, nsfwIndicator:1
};

function csEmptySlot(){
  var o = {};
  CHAR_KEYS.forEach(function(k){ o[k] = CHAR_ARRAY_KEYS[k] ? [] : null; });
  return o;
}

function csSave(idx){
  if(!charSlots[idx]) charSlots[idx] = csEmptySlot();
  CHAR_KEYS.forEach(function(k){
    var v = S[k];
    charSlots[idx][k] = Array.isArray(v) ? v.slice() : v;
  });
}

function csLoad(idx){
  var slot = charSlots[idx];
  CHAR_KEYS.forEach(function(k){
    S[k] = slot
      ? (Array.isArray(slot[k]) ? slot[k].slice() : slot[k])
      : (CHAR_ARRAY_KEYS[k] ? [] : null);
  });
}

/* Switch active editing slot — UI only, prompt unchanged */
function csSwitchTo(idx){
  if(idx === activeChar) return;
  csSave(activeChar);
  activeChar = idx;
  csLoad(idx);
  csReflectButtons();
  csRenderTabs();
  if(typeof refreshGenderGrids==='function') refreshGenderGrids();
  csUpdateSaveBar(0); csUpdateSaveBar(1);
  /* intentionally NO rebuild() — switching edit target never changes prompt */
  if(typeof renderCharCards==='function') renderCharCards();
}

function csReflectButtons(){
  var singles = {
    ageGrid:'age', bodyGrid:'body', hairstyleGrid:'hairstyle',
    eyeShapeGrid:'eyeShape', eyeColorGrid:'eyeColor',
    clothingGrid:'clothing',
    clothingTopGrid:'clothingTop', clothingBottomGrid:'clothingBottom',
    nsfwTopGrid:'nsfwTop', nsfwBottomGrid:'nsfwBottom',
    sockLengthGrid:'sockLength', shoesGrid:'shoes', expressionGrid:'expression'
  };
  /* skin grid uses .sb buttons — reflect separately */
  (function(){
    var sv = S.skin;
    var sg = document.getElementById('skinGrid');
    if(sg) sg.querySelectorAll('.sb').forEach(function(btn){
      var matches = btn.getAttribute('data-val') === sv;
      btn.classList.toggle('on', matches);
    });
    /* hair color grids */
    ['hairColorGrid','hairColor2Grid'].forEach(function(gid){
      var hv = gid==='hairColorGrid' ? S.hairColor1 : S.hairColor2;
      var hg = document.getElementById(gid);
      if(hg) hg.querySelectorAll('.cb,.ob').forEach(function(btn){
        btn.classList.toggle('on', btn.getAttribute('data-val')===hv);
      });
    });
  })();
  Object.keys(singles).forEach(function(gid){
    var k = singles[gid];
    var g = document.getElementById(gid); if(!g) return;
    g.querySelectorAll('.ob').forEach(function(b){
      var v = (b.getAttribute('data-val')||'').toLowerCase();
      b.classList.toggle('on', !!(S[k] && v && v === String(S[k]).toLowerCase()));
    });
  });
  var multis = {
    clothingAccGrid:'clothingAcc', clothingConditionGrid:'clothingCondition',
    faceAccGrid:'faceAcc', poseGrid:'poses', effectsGrid:'effects',
    liquidsGrid:'liquids', nsfwBodyGrid:'nsfwBody', nsfwClothingGrid:'nsfwClothing',
    nsfwPoseGrid:'nsfwPose', nsfwFluidGrid:'nsfwFluid',
    nsfwIndicatorGrid:'nsfwIndicator', bodyPartsGrid:'bodyParts',
    weaponGrid:'weapons', propsGrid:'props',
    electronicsGrid:'electronics', otherItemsGrid:'otherItems'
  };
  Object.keys(multis).forEach(function(gid){
    var k = multis[gid];
    var g = document.getElementById(gid); if(!g) return;
    var vals = (S[k]||[]).map(function(v){ return String(v).toLowerCase(); });
    g.querySelectorAll('.ob').forEach(function(b){
      var v = (b.getAttribute('data-val')||'').toLowerCase();
      b.classList.toggle('on', !!(v && vals.includes(v)));
    });
  });
  [{gid:'hairColorGrid',k:'hairColor1',arr:HAIR_COLORS},
   {gid:'hairColor2Grid',k:'hairColor2',arr:HAIR_COLORS},
   {gid:'eyeColorGrid',k:'eyeColor',arr:EYE_COLORS}
  ].forEach(function(cfg){
    var g = document.getElementById(cfg.gid); if(!g) return;
    g.querySelectorAll('.cb').forEach(function(b,i){
      var on = cfg.arr[i] && cfg.arr[i].id === S[cfg.k];
      b.classList.toggle('on', !!on);
      b.style.borderColor = on ? 'rgba(255,255,255,.85)' : 'transparent';
    });
  });
  document.querySelectorAll('.sb').forEach(function(b,i){
    if(!SKINS[i]) return;
    var on = S.skin === SKINS[i].val;
    b.classList.toggle('on', on);
    b.style.borderColor = on ? 'white' : SKINS[i].bg;
  });
  ['clothingColor','clothingTopColor','clothingBottomColor',
   'nsfwTopColor','nsfwBottomColor','nsfwClothingColor','sockColor','shoeColor'
  ].forEach(function(k){ if(window._updateColorDot) _updateColorDot(k); });
}

function csSummary(idx){
  var d = charSlots[idx]; if(!d) return null;
  var parts = [];
  if(d.hairColor1&&d.hairstyle) parts.push(d.hairColor1+' '+d.hairstyle);
  else if(d.hairColor1) parts.push(d.hairColor1+' hair');
  else if(d.hairstyle)  parts.push(d.hairstyle);
  if(d.eyeColor) parts.push(d.eyeColor+' eyes');
  var outfit = d.clothing||(d.clothingTop?d.clothingTop+(d.clothingBottom?' + '+d.clothingBottom:''):null);
  if(outfit) parts.push(outfit);
  if(d.expression) parts.push(d.expression);
  if(d.poses&&d.poses[0]) parts.push(d.poses[0]);
  return parts.length ? parts.map(function(p){return p.charAt(0).toUpperCase()+p.slice(1);}).join(' · ') : null;
}

function csGetCharName(idx){
  var d = charSlots[idx];
  if(d && d._name) return d._name;
  var saved = csPresets[idx];
  return saved ? saved.name : null;
}

var CS_WRAP_IDS = ['csWrapOutfit','csWrapMood','csWrapTools'];
var CS_TAB_IDS  = ['csTabsOutfit','csTabsMood','csTabsTools'];

function csRenderTabs(){
  var active = S.characters.filter(Boolean);
  var show   = active.length >= 2;
  CS_WRAP_IDS.forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.style.display = show ? '' : 'none';
  });
  /* Patch card UI without destroying inputs */
  if(typeof renderCharCards==='function') renderCharCards();
  if(!show) return;
  CS_TAB_IDS.forEach(function(cid){
    var container = document.getElementById(cid); if(!container) return;
    container.innerHTML = '';
    S.characters.forEach(function(gender,i){
      if(!gender) return;
      var isEditing = (i===activeChar);
      var summary   = csSummary(i);
      var color     = CS_GCOLOR[gender]||'#a78bfa';
      var icon      = CS_GICON[gender]||'🧑';
      var label     = gender.charAt(0).toUpperCase()+gender.slice(1);
      var savedName = csGetCharName(i);

      var tab = document.createElement('div');
      tab.className = 'cs-tab'+(isEditing?' cs-active':'');
      tab.style.setProperty('--cs-color', color);
      tab.innerHTML =
        '<div class="cs-tab-top">'+
          '<span class="cs-icon">'+icon+'</span>'+
          '<div class="cs-tab-info">'+
            '<span class="cs-lbl">'+(savedName||label+' '+(i+1))+'</span>'+
            '<span class="cs-num">'+(savedName?label:'Char '+(i+1))+'</span>'+
          '</div>'+
          (isEditing?'<span class="cs-editing"><i class="fas fa-pen"></i> Editing</span>':
                     '<span class="cs-switch-hint"><i class="fas fa-exchange-alt"></i></span>')+
        '</div>'+
        '<div class="cs-summary '+(summary?'':'cs-empty')+'">'+(summary||'No details yet')+'</div>';
      tab.addEventListener('click', function(){ csSwitchTo(i); });
      container.appendChild(tab);
    });
  });
}

/* ── Build prompt tokens for one slot ── */
function csBuildCharText(d, gTag){
  var p = [];
  if(gTag) p.push(gTag);
  var ageVal = d._age ? (typeof _ageLabel==='function' ? _ageLabel(d._age) : d._age+' years old') : d.age;
  if(ageVal) p.push(ageVal);
  if(d.body) p.push(d.body);
  if(d.skin) p.push(d.skin);
  if(S.nsfw&&d.nsfwBody&&d.nsfwBody.length) p.push(d.nsfwBody.join(', '));
  if(d.eyeShape&&d.eyeColor) p.push(d.eyeShape+', '+d.eyeColor+' eyes');
  else if(d.eyeShape) p.push(d.eyeShape+' eyes');
  else if(d.eyeColor) p.push(d.eyeColor+' eyes');
  if(d.hairColor1&&d.hairColor2&&d.hairstyle) p.push(d.hairColor1+' to '+d.hairColor2+' ombre '+d.hairstyle+' hair');
  else if(d.hairColor1&&d.hairstyle) p.push(d.hairColor1+' '+d.hairstyle+' hair');
  else if(d.hairColor2&&d.hairstyle) p.push(d.hairColor2+' ombre '+d.hairstyle+' hair');
  else if(d.hairColor1&&d.hairColor2) p.push(d.hairColor1+' to '+d.hairColor2+' ombre hair');
  else if(d.hairColor1) p.push(d.hairColor1+' hair');
  else if(d.hairstyle)  p.push(d.hairstyle+' hair');
  var wear = [];
  if(d.clothing) wear.push(d.clothingColor?d.clothingColor+' '+d.clothing:d.clothing);
  else {
    if(d.clothingTop)    wear.push(d.clothingTopColor   ?d.clothingTopColor+' '+d.clothingTop      :d.clothingTop);
    if(d.clothingBottom) wear.push(d.clothingBottomColor?d.clothingBottomColor+' '+d.clothingBottom:d.clothingBottom);
  }
  if(S.nsfw){
    if(d.nsfwTop)    wear.push(d.nsfwTopColor   ?d.nsfwTopColor+' '+d.nsfwTop      :d.nsfwTop);
    if(d.nsfwBottom) wear.push(d.nsfwBottomColor?d.nsfwBottomColor+' '+d.nsfwBottom:d.nsfwBottom);
    var nc=d.nsfwClothing;
    if(nc)(Array.isArray(nc)?nc:[nc]).forEach(function(c){wear.push(d.nsfwClothingColor?d.nsfwClothingColor+' '+c:c);});
  }
  if(wear.length) p.push('wearing '+wear.join(', '));
  if(d.clothingCondition&&d.clothingCondition.length) p.push(d.clothingCondition.map(function(c){return c+' clothes';}).join(', '));
  if(d.clothingAcc&&d.clothingAcc.length) p.push(d.clothingAccColor ? d.clothingAccColor+' '+d.clothingAcc.join(', ') : d.clothingAcc.join(', '));
  if(S.nsfw&&d.bodyParts&&d.bodyParts.length) p.push(d.bodyParts.join(', '));
  if(d.sockColor&&d.sockLength) p.push(d.sockColor+' '+d.sockLength+' socks');
  else if(d.sockLength) p.push(d.sockLength+' socks');
  if(d.shoes) p.push(d.shoeColor?d.shoeColor+' '+d.shoes:d.shoes);
  if(d.faceAcc&&d.faceAcc.length) p.push(d.faceAccColor ? d.faceAccColor+' '+d.faceAcc.join(', ') : d.faceAcc.join(', '));
  if(d.expression) p.push(d.expression+' expression');
  var poses=(d.poses||[]).concat(S.nsfw?(d.nsfwPose||[]):[]);
  if(poses.length) p.push(poses.join(', '));
  if(d.effects&&d.effects.length) p.push(d.effects.join(', '));
  var fluids=(d.liquids||[]).concat(S.nsfw?(d.nsfwFluid||[]):[]);
  if(fluids.length) p.push(fluids.join(', '));
  if(S.nsfw&&d.nsfwIndicator&&d.nsfwIndicator.length) p.push(d.nsfwIndicator.join(', '));
  /* Tools per-character */
  var tools=[].concat(d.weapons||[],d.props||[],d.electronics||[],d.otherItems||[]);
  if(tools.length) p.push('holding '+tools.join(', '));
  return p;
}

function csSharedTail(){
  var p=[];
  /* tools are now per-character — not in shared tail */
  var envs=(S.environment?['in '+S.environment]:[]).concat(S.nsfw?S.nsfwEnv.map(function(e){return 'in '+e;}):[]);
  if(envs.length) p.push(envs.join(', '));
  if(S.era)         p.push(S.era+' style');
  if(S.style)       p.push(S.style);
  if(S.animeStudio) p.push(S.animeStudio);
  if(S.colorGrade)  p.push(S.colorGrade);
  if(S.stroke)      p.push(S.stroke);
  if(S.shadow)      p.push(S.shadow);
  if(S.lights.length) p.push(S.lights.join(', '));
  if(S.glow&&S.glow.toLowerCase()!=='no glow') p.push(S.glow);
  if(S.smooth) p.push(S.smooth);
  if(S.angle) p.push(S.angle);
  if(S.shot)  p.push(S.shot);
  if(S.nsfw&&S.nsfwShot.length) p.push(S.nsfwShot.join(', '));
  if(S.look)  p.push('looking '+S.look);
  if(S.lens)  p.push(S.lens+' lens');
  if(S.lensEffect&&S.lensEffect.toLowerCase()!=='none') p.push(S.lensEffect);
  return p;
}

/* ══ OVERRIDE buildPosText — reads from charSlots[], not S ══ */
var _origBuildPosText = buildPosText;
buildPosText = function(){
  var activeChars = S.characters.map(function(g,i){return {g:g,i:i};}).filter(function(x){return !!x.g;});
  if(!activeChars.length) return _origBuildPosText();

  csSave(activeChar); /* flush live S → active slot */

  var quality = S.quality.length ? S.quality.join(', ') : '';
  var tail    = csSharedTail();

  if(activeChars.length === 1){
    var sc = activeChars[0];
    var slot = charSlots[sc.i] || csEmptySlot();
    var p = [];
    if(quality) p.push(quality);
    csBuildCharText(slot, GENDER_TAG[sc.g]||'1girl').forEach(function(x){p.push(x);});
    tail.forEach(function(x){p.push(x);});
    return p.join(', ').replace(/,\s*$/,'');
  }

  /* Multi-char: quality, countTag, (char1), AND (char2), scene */
  var genders  = activeChars.map(function(x){return x.g;});
  var fCnt     = genders.filter(function(g){return g==='female';}).length;
  var mCnt     = genders.filter(function(g){return g==='male';}).length;
  var countTag = fCnt===2?'2girls':mCnt===2?'2boys':(fCnt>=1&&mCnt>=1)?'1girl, 1boy':'2characters';

  var blocks = activeChars.map(function(item){
    var slot  = charSlots[item.i] || csEmptySlot();
    var parts = csBuildCharText(slot, GENDER_TAG[item.g]||'1girl');
    return parts.length ? '('+parts.join(', ')+')' : '';
  }).filter(Boolean);

  var tailStr = tail.join(', ');
  var head    = [quality, countTag].filter(Boolean).join(', ');
  return [head, blocks.join(', AND '), tailStr].filter(Boolean).join(', ').replace(/,\s*$/,'');
};

/* ══ OVERRIDE buildPosGroups — multi-char chips ══ */
var _origBuildPosGroups = buildPosGroups;
buildPosGroups = function(){
  var activeChars = S.characters.map(function(g,i){return {g:g,i:i};}).filter(function(x){return !!x.g;});
  if(activeChars.length <= 1) return _origBuildPosGroups();

  csSave(activeChar);

  var G=[];
  function add(cls,items){var f=items.filter(Boolean);if(f.length)G.push({cls:cls,items:f});}

  if(S.quality.length) add('q',[S.quality.join(', ')]);

  var genders  = activeChars.map(function(x){return x.g;});
  var fCnt     = genders.filter(function(g){return g==='female';}).length;
  var mCnt     = genders.filter(function(g){return g==='male';}).length;
  var countTag = fCnt===2?'2girls':mCnt===2?'2boys':(fCnt>=1&&mCnt>=1)?'1girl, 1boy':'2characters';
  add('c',[countTag]);

  activeChars.forEach(function(item){
    var slot  = charSlots[item.i] || csEmptySlot();
    var parts = csBuildCharText(slot, GENDER_TAG[item.g]||'1girl');
    if(parts.length) add('c', parts);
  });

  var sc=[];
  var envs=(S.environment?['in '+S.environment]:[]).concat(S.nsfw?S.nsfwEnv.map(function(e){return 'in '+e;}):[]);
  if(envs.length) sc.push(envs.join(', '));
  if(S.era) sc.push(S.era+' style');
  if(S.style) sc.push(S.style);
  if(S.animeStudio) sc.push(S.animeStudio);
  if(S.colorGrade) sc.push(S.colorGrade);
  if(S.stroke) sc.push(S.stroke);
  if(S.shadow) sc.push(S.shadow);
  if(S.lights.length) sc.push(S.lights.join(', '));
  if(S.glow&&S.glow.toLowerCase()!=='no glow') sc.push(S.glow);
  if(S.smooth) sc.push(S.smooth);
  if(sc.length) add('s',sc);

  var cm=[];
  if(S.angle) cm.push(S.angle);
  if(S.shot) cm.push(S.shot);
  if(S.nsfw&&S.nsfwShot.length) S.nsfwShot.forEach(function(x){cm.push(x);});
  if(S.look) cm.push('looking '+S.look);
  if(S.lens) cm.push(S.lens+' lens');
  if(S.lensEffect&&S.lensEffect.toLowerCase()!=='none') cm.push(S.lensEffect);
  if(cm.length) add('cam',cm);

  /* tools per-char — already in char blocks */

  return G;
};

/* ══ HOOK rebuild ══ */
var _origRebuild = rebuild;
rebuild = function(){
  csSave(activeChar);
  csRenderTabs();
  _origRebuild();
};

/* ══ HOOK resetAll ══ */
var _origResetAll = resetAll;
resetAll = function(silent){
  charSlots[0]=null; charSlots[1]=null;
  activeChar=0;
  _origResetAll(silent);
};

/* ══ HOOK randomize ══ */
var _origRandomize = (typeof randomize==='function') ? randomize : null;
if(_origRandomize){
  randomize = function(){
    _origRandomize();
    csSave(0); activeChar=0;
    S.characters.forEach(function(gender,i){
      if(!gender||i===0) return;
      charSlots[i]=csEmptySlot();
      var s0=charSlots[0]||{};
      var oH=HAIR_COLORS.filter(function(h){return h.id!==s0.hairColor1;});
      var oE=EYE_COLORS.filter(function(e){return e.id!==s0.eyeColor;});
      charSlots[i].hairColor1 = oH.length?oH[Math.floor(Math.random()*oH.length)].id:(HAIR_COLORS[0]||{}).id;
      charSlots[i].eyeColor   = oE.length?oE[Math.floor(Math.random()*oE.length)].id:null;
      charSlots[i].hairstyle  = (function(){ var lst=D&&D.hairstyle?(D.hairstyle.shared||[]).concat(D.hairstyle.female||[]):[];return lst.length?lst[Math.floor(Math.random()*lst.length)].toLowerCase():null;})();
      charSlots[i].expression = D&&D.expression?D.expression.lbl[Math.floor(Math.random()*D.expression.lbl.length)].toLowerCase():null;
      charSlots[i].age        = s0.age||null;
      var outfits=D&&D.clothing?(D.clothing.shared||[]).concat(D.clothing.female||[]):[];
      if(outfits.length) charSlots[i].clothing=outfits[Math.floor(Math.random()*outfits.length)].toLowerCase();
      var poses=D&&D.pose?D.pose.lbl:[];
      if(poses.length) charSlots[i].poses=[poses[Math.floor(Math.random()*poses.length)].toLowerCase()];
    });
    csRenderTabs();
  };
}

/* ══ PRESET SAVE SYSTEM ══ */
var csPresets = [null, null]; // {name, slot} per character index

function csSavePreset(charIdx){
  csLibSave(charIdx);
}

function csLoadPreset(charIdx){
  if(!csPresets[charIdx]){ csToast('No saved character for slot '+(charIdx+1),'warn'); return; }
  charSlots[charIdx] = JSON.parse(JSON.stringify(csPresets[charIdx].slot));
  if(charIdx===activeChar) csLoad(charIdx);
  csReflectButtons();
  csRenderTabs();
  rebuild();
  csToast('✓ Loaded "'+csPresets[charIdx].name+'"','ok');
}

function csToast(msg, type){
  var t=document.createElement('div');
  t.style.cssText='position:fixed;bottom:80px;left:50%;transform:translateX(-50%);padding:.5rem 1.1rem;border-radius:100px;font-size:.78rem;font-weight:700;z-index:9999;pointer-events:none;transition:opacity .4s;'+(type==='ok'?'background:#10b981;color:#fff;':'background:#f59e0b;color:#000;');
  t.textContent=msg;
  document.body.appendChild(t);
  setTimeout(function(){t.style.opacity='0';setTimeout(function(){t.remove();},400);},2000);
}

function csUpdateSaveBar(charIdx){
  var bar = document.getElementById('csSaveBar'+charIdx);
  if(!bar) return;
  var preset = csPresets[charIdx];
  var nameInput = document.getElementById('csNameInput'+charIdx);
  if(nameInput && preset) nameInput.value = preset.name;
  var loadBtn = bar.querySelector('.cs-load-btn');
  if(loadBtn) loadBtn.style.display = preset ? '' : 'none';
}

function csBuildSaveBar(charIdx){
  var bar = document.createElement('div');
  bar.id = 'csSaveBar'+charIdx;
  bar.className = 'cs-save-bar';
  bar.innerHTML =
    '<div class="cs-save-bar-inner">'+
      '<span class="cs-bar-num">Char '+(charIdx+1)+'</span>'+
      '<input class="cs-name-input" id="csNameInput'+charIdx+'" placeholder="Name this character…" maxlength="32">'+
      '<button class="cs-save-char-btn cs-save-btn" title="Save to library"><i class="fas fa-star"></i></button>'+
      '<button class="cs-lib-char-btn" title="Browse saved characters"><i class="fas fa-address-book"></i></button>'+
    '</div>';
  bar.querySelector('.cs-save-char-btn').addEventListener('click', function(){ csSavePreset(charIdx); });
  bar.querySelector('.cs-lib-char-btn').addEventListener('click', function(){ csOpenLibraryFor(charIdx); });
  return bar;
}

/* ══ CHARACTER LIBRARY ══ */
var csLibrary = JSON.parse(localStorage.getItem('aps_charLib') || '[]');

function csLibSave(charIdx){
  /* Try IDC card name input first, then legacy csNameInput */
  var name = '';
  var row = document.getElementById('charCardsRow');
  if(row){
    var card = row.querySelector('[data-card-idx="'+charIdx+'"]');
    if(card){
      var cin = card.querySelector('.c-name-input');
      if(cin) name = cin.value.trim();
    }
  }
  if(!name){
    var nameInput = document.getElementById('csNameInput'+charIdx);
    name = (nameInput ? nameInput.value.trim() : '');
  }
  if(!name){ csToast('Enter a character name first','warn'); return; }
  // Reject duplicate names
  var duplicate = csLibrary.find(function(c){ return c.name.toLowerCase()===name.toLowerCase(); });
  if(duplicate){ csToast('Name "'+name+'" already exists in library','warn'); return; }
  // Write name into slot directly (works even if charIdx !== activeChar)
  if(!charSlots[charIdx]) charSlots[charIdx] = csEmptySlot();
  charSlots[charIdx]._name = name;
  if(charIdx === activeChar) S._name = name;
  csSave(charIdx);
  var entry = {
    id: Date.now(),
    name: name,
    gender: S.characters ? S.characters[charIdx] : null,
    slot: JSON.parse(JSON.stringify(charSlots[charIdx]||csEmptySlot())),
    date: new Date().toLocaleDateString()
  };
  csLibrary.unshift(entry);
  localStorage.setItem('aps_charLib', JSON.stringify(csLibrary));
  csToast('✓ Saved "'+name+'" to library','ok');
  csRenderTabs();
  csRenderLibrary();
}

function csLibLoad(entry, charIdx){
  if(typeof charIdx === 'undefined') charIdx = activeChar;
  charSlots[charIdx] = JSON.parse(JSON.stringify(entry.slot));
  if(entry.gender && S.characters) S.characters[charIdx] = entry.gender;
  if(charIdx === activeChar) csLoad(charIdx);
  csReflectButtons();
  csRenderTabs();
  if(typeof refreshGenderGrids==='function') refreshGenderGrids();
  rebuild();
  csToast('✓ Loaded "'+entry.name+'"','ok');
}

function csLibDelete(id){
  csLibrary = csLibrary.filter(function(c){ return c.id!==id; });
  localStorage.setItem('aps_charLib', JSON.stringify(csLibrary));
  csRenderLibrary();
  csToast('Deleted','ok');
}

function csRenderLibrary(){
  var list = document.getElementById('csLibList'); if(!list) return;
  list.innerHTML = '';
  if(!csLibrary.length){
    list.innerHTML = '<div class="cs-lib-empty"><i class="fas fa-user-slash"></i><span>No saved characters yet</span></div>';
    return;
  }
  csLibrary.forEach(function(entry){
    var gender = entry.gender || 'unset';
    var color  = CS_GCOLOR[gender] || '#a78bfa';
    var icon   = CS_GICON[gender]  || '🧑';
    var summary = '';
    var d = entry.slot || {};
    if(d.hairColor1) summary += d.hairColor1+' ';
    if(d.hairstyle)  summary += d.hairstyle+' hair';
    if(d.eyeColor)   summary += (summary?' · ':'')+d.eyeColor+' eyes';
    var outfit = d.clothing||(d.clothingTop?d.clothingTop+(d.clothingBottom?' + '+d.clothingBottom:''):null);
    if(outfit) summary += (summary?' · ':'')+outfit;

    var item = document.createElement('div');
    item.className = 'cs-lib-item';
    item.style.setProperty('--cs-color', color);
    item.innerHTML =
      '<div class="cs-lib-icon">'+icon+'</div>'+
      '<div class="cs-lib-info">'+
        '<div class="cs-lib-name">'+entry.name+'</div>'+
        '<div class="cs-lib-meta">'+(gender||'?')+' · '+entry.date+'</div>'+
        (summary?'<div class="cs-lib-summary">'+summary+'</div>':'')+
      '</div>'+
      '<div class="cs-lib-actions">'+
        '<button class="cs-lib-load-btn" title="Load to active character"><i class="fas fa-arrow-down"></i> Load</button>'+
        (S.characters&&S.characters[_csLibTargetChar===0?1:0]?'<button class="cs-lib-load2-btn" title="Load to other character"><i class="fas fa-arrow-down"></i> Other</button>':'')+
        '<button class="cs-lib-del-btn" title="Delete"><i class="fas fa-trash"></i></button>'+
      '</div>';
    item.querySelector('.cs-lib-load-btn').addEventListener('click', function(e){ e.stopPropagation(); csLibLoad(entry, _csLibTargetChar); document.getElementById('csLibOverlay').classList.remove('open'); });
    var l2btn = item.querySelector('.cs-lib-load2-btn');
    if(l2btn) l2btn.addEventListener('click', function(e){ e.stopPropagation(); csLibLoad(entry, _csLibTargetChar===0?1:0); document.getElementById('csLibOverlay').classList.remove('open'); });
    item.querySelector('.cs-lib-del-btn').addEventListener('click', function(e){ e.stopPropagation(); csLibDelete(entry.id); });
    list.appendChild(item);
  });
}

var _csLibTargetChar = 0;

function csOpenLibrary(){
  _csLibTargetChar = activeChar;
  csRenderLibrary();
  document.getElementById('csLibOverlay').classList.add('open');
}

function csOpenLibraryFor(charIdx){
  _csLibTargetChar = charIdx;
  csRenderLibrary();
  document.getElementById('csLibOverlay').classList.add('open');
}

/* ══ DOM INIT ══ */
document.addEventListener('DOMContentLoaded', function(){
  // ── Build library overlay ──
  if(!document.getElementById('csLibOverlay')){
    var overlay = document.createElement('div');
    overlay.id = 'csLibOverlay';
    overlay.className = 'cs-lib-overlay';
    overlay.innerHTML =
      '<div class="cs-lib-modal">'+
        '<div class="cs-lib-modal-hd">'+
          '<div class="cs-lib-modal-title"><i class="fas fa-address-book"></i> Character Library</div>'+
          '<button class="cs-lib-close" id="csLibClose"><i class="fas fa-xmark"></i></button>'+
        '</div>'+
        '<div class="cs-lib-list" id="csLibList"></div>'+
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function(e){ if(e.target===overlay) overlay.classList.remove('open'); });
    document.getElementById('csLibClose').addEventListener('click', function(){ overlay.classList.remove('open'); });
  }

  [
    {catId:'cat-outfit',    wrapId:'csWrapOutfit',    tabsId:'csTabsOutfit'   },
    {catId:'cat-mood',      wrapId:'csWrapMood',      tabsId:'csTabsMood'     },
    {catId:'cat-tools',     wrapId:'csWrapTools',     tabsId:'csTabsTools'    }
  ].forEach(function(cfg){
    var cat=document.getElementById(cfg.catId);
    if(!cat||document.getElementById(cfg.wrapId)) return;

    // Sticky wrapper
    var stickyWrap = document.createElement('div');
    stickyWrap.className = 'cs-sticky-wrap';
    stickyWrap.style.display = 'none';
    stickyWrap.id = cfg.wrapId;

    var wrap=document.createElement('div');
    wrap.className='cs-wrap';

    // Header row: only for cat-character (outfit) — mood/tools get no header
    if(cfg.catId==='cat-character'){
      var header = document.createElement('div');
      header.className = 'cs-wrap-header';
      header.innerHTML =
        '<div class="cs-wrap-label"><i class="fas fa-pen-to-square"></i><span>Editing Character</span></div>'+
        '<button class="cs-lib-open-btn" id="csLibOpenBtn"><i class="fas fa-address-book"></i> Library</button>';
      wrap.appendChild(header);
    }

    // Tabs row
    var tabsDiv = document.createElement('div');
    tabsDiv.className='cs-tabs'; tabsDiv.id=cfg.tabsId;
    wrap.appendChild(tabsDiv);

    // Save row — only in Character cat
    if(cfg.catId==='cat-character'){
      var saveRow = document.createElement('div');
      saveRow.className = 'cs-save-row';
      // Char 0 save
      saveRow.appendChild(csBuildSaveBar(0));
      saveRow.appendChild(csBuildSaveBar(1));
      wrap.appendChild(saveRow);
    }

    stickyWrap.appendChild(wrap);
    cat.insertBefore(stickyWrap, cat.firstChild);

    // Bind library button
    var libBtn = document.getElementById('csLibOpenBtn');
    if(libBtn) libBtn.addEventListener('click', csOpenLibrary);
  });

  /* styles now in style.css */

  csRenderTabs();
});

/* ════════════════════════════════════════════════════════════════
   SLOT MIRROR — intercept every S[charKey] write via defineProperty
   
   Any code anywhere (app.js buttons, color picker, randomize...)
   that writes S[k] where k is a CHAR_KEY will automatically mirror
   the value into charSlots[activeChar][k].
   
   This means slot[0] and slot[1] are truly independent with zero
   changes needed to app.js button handlers.
════════════════════════════════════════════════════════════════ */
(function installSlotMirror(){
  var CHAR_KEY_SET = {};
  CHAR_KEYS.forEach(function(k){ CHAR_KEY_SET[k] = true; });

  CHAR_KEYS.forEach(function(k){
    var _val = S[k]; /* capture current value before redefining */

    Object.defineProperty(S, k, {
      enumerable:   true,
      configurable: true,
      get: function(){ return _val; },
      set: function(v){
        _val = v;
        /* Mirror to active slot — but only when charSlots is ready */
        if(typeof charSlots !== 'undefined' && typeof activeChar !== 'undefined'){
          if(!charSlots[activeChar]) charSlots[activeChar] = csEmptySlot();
          charSlots[activeChar][k] = Array.isArray(v) ? v.slice() : v;
        }
      }
    });
  });



})();
