/* ═══════════════════════════════════
   STATE
═══════════════════════════════════ */
const S={
  characters:[null,null,null],
  charCount:null,age:null,skin:null,body:null,
  hairColor1:null,hairColor2:null,hairstyle:null,
  eyeColor:null,eyeShape:null,
  clothing:null,clothingColor:null,
  clothingTop:null,clothingTopColor:null,
  clothingBottom:null,clothingBottomColor:null,
  clothingAcc:[],clothingCondition:[],bodyParts:[],
  sockColor:null,sockLength:null,shoes:null,shoeColor:null,faceAcc:[],
  nsfwTop:null,nsfwTopColor:null,
  nsfwBottom:null,nsfwBottomColor:null,
  nsfwClothing:null,nsfwClothingColor:null,
  expression:null,poses:[],effects:[],liquids:[],
  weapons:[],props:[],electronics:[],otherItems:[],
  environment:null,style:null,era:null,animeStudio:null,colorGrade:null,
  stroke:null,shadow:null,quality:[],lights:[],glow:null,smooth:null,
  angle:null,shot:null,look:null,lens:null,lensEffect:null,
  negatives:[],negBody:[],negQuality:[],
  nsfwBody:[],nsfwTop:null,nsfwBottom:null,nsfwClothing:[],nsfwPose:[],nsfwFluid:[],
  nsfwEnv:[],nsfwIndicator:[],nsfwShot:[],
  nsfw:false,
  weights:{},
  extraPos:[],extraNeg:[],
  favourites: [],

};

/* ═══════════════════════════════════
   COLOR DATA
═══════════════════════════════════ */
const HAIR_COLORS=[
  // Enhanced vibrant colors with better contrast
  {id:'white',   n:'White',    l:'#ffffff',m:'#f5f5f5',d:'#d9d9d9', fg:'#1a1a2e'},
  {id:'silver',  n:'Silver',   l:'#f0f0f0',m:'#d0d0d0',d:'#a0a0a0', fg:'#1a1a2e'},
  {id:'blonde',  n:'Blonde',   l:'#fef0aa',m:'#ffd700',d:'#cc8800', fg:'#1a1a2e'},
  {id:'gold',    n:'Gold',     l:'#ffdd00',m:'#ffbb00',d:'#cc6600', fg:'#1a1a2e'},
  {id:'peach',   n:'Peach',    l:'#ffccaa',m:'#ffb366',d:'#ff8c42', fg:'#1a1a2e'},
  {id:'coral',   n:'Coral',    l:'#ff9999',m:'#ff6347',d:'#ff4500', fg:'#1a1a2e'},
  {id:'red',     n:'Red',      l:'#ff5252',m:'#d93636',d:'#8b0000', fg:'#f0f4ff'},
  {id:'auburn',  n:'Auburn',   l:'#d4836a',m:'#9a3412',d:'#431407', fg:'#f0f4ff'},
  {id:'pink',    n:'Pink',     l:'#ff89dd',m:'#ff69b4',d:'#d6367d', fg:'#1a1a2e'},
  {id:'lavender',n:'Lavender', l:'#e6b3ff',m:'#c299ff',d:'#a855f7', fg:'#1a1a2e'},
  {id:'purple',  n:'Purple',   l:'#d8a8ff',m:'#b366ff',d:'#7b2cbf', fg:'#1a1a2e'},
  {id:'magenta', n:'Magenta',  l:'#ff00ff',m:'#dd1c88',d:'#b8005c', fg:'#1a1a2e'},
  {id:'blue',    n:'Blue',     l:'#66d9ff',m:'#1e90ff',d:'#0047ab', fg:'#1a1a2e'},
  {id:'indigo',  n:'Indigo',   l:'#c7d2fe',m:'#4338ca',d:'#1e1b4b', fg:'#1a1a2e'},
  {id:'cyan',    n:'Cyan',     l:'#00ffff',m:'#00e5e5',d:'#0088cc', fg:'#1a1a2e'},
  {id:'teal',    n:'Teal',     l:'#20d9a3',m:'#009688',d:'#004d40', fg:'#1a1a2e'},
  {id:'mint',    n:'Mint',     l:'#66ffaa',m:'#00ff88',d:'#00cc66', fg:'#1a1a2e'},
  {id:'green',   n:'Green',    l:'#66ff99',m:'#00d084',d:'#008c45', fg:'#1a1a2e'},
  {id:'brown',   n:'Brown',    l:'#9b7d5c',m:'#6d4e3f',d:'#3d2817', fg:'#1a1a2e'},
  {id:'black',   n:'Black',    l:'#4a4a4a',m:'#1a1a1a',d:'#000000', fg:'#f0f4ff'}
];
const EYE_COLORS=[
  {id:'blue',     n:'Blue',     l:'#66d9ff',m:'#1e90ff',d:'#0047ab'},
  {id:'green',    n:'Green',    l:'#66ffaa',m:'#00d084',d:'#008c45'},
  {id:'brown',    n:'Brown',    l:'#9b7d5c',m:'#6d4e3f',d:'#3d2817'},
  {id:'purple',   n:'Purple',   l:'#d8a8ff',m:'#b366ff',d:'#7b2cbf'},
  {id:'violet',   n:'Violet',   l:'#ee82ee',m:'#9400d3',d:'#4b0082'},
  {id:'silver',   n:'Silver',   l:'#f0f0f0',m:'#d0d0d0',d:'#a0a0a0'},
  {id:'red',      n:'Red',      l:'#ff5252',m:'#d93636',d:'#8b0000'},
  {id:'gold',     n:'Gold',     l:'#ffdd00',m:'#ffbb00',d:'#cc6600'},
  {id:'pink',     n:'Pink',     l:'#ff89dd',m:'#ff69b4',d:'#d6367d'},
  {id:'cyan',     n:'Cyan',     l:'#00ffff',m:'#00e5e5',d:'#0088cc'},
  {id:'jade',     n:'Jade',     l:'#66ffaa',m:'#00ff88',d:'#00cc66'},
  {id:'amber',    n:'Amber',    l:'#ffdd00',m:'#ffaa00',d:'#cc6600'},
  {id:'grey',     n:'Grey',     l:'#d3d3d3',m:'#a9a9a9',d:'#696969'},
  {id:'teal',     n:'Teal',     l:'#20d9a3',m:'#009688',d:'#004d40'},
  {id:'emerald',  n:'Emerald',  l:'#50c878',m:'#00a854',d:'#006838'},
  {id:'sapphire', n:'Sapphire', l:'#0f52ba',m:'#0047ab',d:'#001f87'},
  {id:'white',    n:'White',    l:'#ffffff',m:'#f5f5f5',d:'#d9d9d9'},
  {id:'black',    n:'Black',    l:'#4a4a4a',m:'#1a1a1a',d:'#000000'},
  {id:'coral',    n:'Coral',    l:'#ff8a65',m:'#ff5722',d:'#ff4500'},
  {id:'rainbow',  n:'Rainbow',  l:'#fce7f3',m:'#a855f7',d:'#6d28d9'}
];
const SKINS=[
  {lbl:'Fair/Pale', val:'fair skin',   bg:'#fde4cc',fg:'#3d1a0a'},
  {lbl:'Light',     val:'light skin',  bg:'#f5cba0',fg:'#3d1a0a'},
  {lbl:'Medium',    val:'medium skin', bg:'#d4956a',fg:'#150800'},
  {lbl:'Tan',       val:'tan skin',    bg:'#b07040',fg:'#fff3e0'},
  {lbl:'Deep',      val:'deep skin',   bg:'#7a4828',fg:'#ffe8d0'},
  {lbl:'Dark',      val:'dark skin',   bg:'#3c1a0a',fg:'#ffd0a8'}
];

/* ═══════════════════════════════════
   BLUEPRINT CELLS
═══════════════════════════════════ */
const BP_CELLS=[
  {id:'bp-char',   icon:'fa-users',               lbl:'Characters', keys:['charCount','characters']},
  {id:'bp-age',    icon:'fa-cake-candles',         lbl:'Age',        keys:['age']},
  {id:'bp-skin',   icon:'fa-circle-half-stroke',   lbl:'Skin & Body',keys:['skin','body']},
  {id:'bp-hair',   icon:'fa-scissors',             lbl:'Hair',       keys:['hairColor1','hairstyle']},
  {id:'bp-eyes',   icon:'fa-eye',                  lbl:'Eyes',       keys:['eyeColor','eyeShape']},
  {id:'bp-outfit', icon:'fa-shirt',                lbl:'Outfit',     keys:['clothing','clothingAcc','shoes']},
  {id:'bp-mood',   icon:'fa-face-smile',           lbl:'Mood',       keys:['expression','poses']},
  {id:'bp-tools',  icon:'fa-sword',                lbl:'Tools',      keys:['weapons','props']},
  {id:'bp-scene',  icon:'fa-mountain-sun',         lbl:'Scene',      keys:['environment','style']},
  {id:'bp-camera', icon:'fa-camera',               lbl:'Camera',     keys:['angle','shot','look']},
  {id:'bp-quality',icon:'fa-sparkles',             lbl:'Quality',    keys:['quality','lights','glow']}
];

/* ═══════════════════════════════════
   OPTION DATA
   nsfw:true → hidden until NSFW on, shown red
═══════════════════════════════════ */
const D={
  charCount:{
    lbl:['1 Girl','1 Man','2 Girls','2 Men','1 Girl + 1 Man','3+ Girls','3+ Men','Mixed Group'],
    val:['1girl','1man','2girls','2men','1girl, 1man','3girls','3men','multiple characters'],
    k:'charCount'
  },
  age:{lbl:['Toddler (0–3)','Child (4–8)','Preteen (9–12)','Teen (13–17)','Young Adult (18–25)','Adult (26–35)','Middle-Aged (36–50)','Elderly (51+)'],val:['toddler','child','preteen','teen','young adult','adult','middle-aged','elderly'],k:'age'},
  gender:{lbl:['Feminine','Masculine','Androgynous'],val:['feminine','masculine','androgynous'],k:'gender'},
  body:{lbl:['Petite','Slim','Athletic','Toned','Curvy','Hourglass','Muscular','Chubby','Tall','Short'],val:['petite body','slim body','athletic body','toned body','curvy body','hourglass figure','muscular body','chubby body','tall figure','short figure'],k:'body'},
  hairstyle:{lbl:['Long Straight','Long Wavy','Long Curly','Twin Tails','High Ponytail','Side Ponytail','Braid','Double Braid','Bun','Messy Bun','Short Bob','Pixie Cut','Hime Cut','Fluffy'],k:'hairstyle'},
  eyeShape:{lbl:['Large Round','Almond','Upturned','Downturned','Cat-like','Doe Eyes','Hooded'],k:'eyeShape'},
  clothingTop:{lbl:['T-Shirt','Crop Top','Tied Crop Top','Off-Shoulder Top','Tank Top','Tube Top','Sleeveless Top','Long Sleeve Shirt','Button-Up Shirt','Oversized Shirt','Graphic Tee','Polo Shirt','Ribbed Top','Halter Top','Hoodie','Zip-Up Hoodie','Oversized Hoodie','Sweatshirt'],k:'clothingTop'},
  clothingBottom:{lbl:['Jeans','Skinny Jeans','Wide-Leg Jeans','Ripped Jeans','Shorts','Denim Shorts','Mini Shorts','High-Waist Shorts','Jogger Pants','Sweatpants','Cargo Pants','Leggings','Pleated Skirt','Mini Skirt','Plaid Skirt','Long Skirt','Denim Skirt'],k:'clothingBottom'},
  nsfwTop:{lbl:['Tiny Top','Strapless Bra Top','Micro Crop Top','Open Back Top','Sheer Top','Fishnet Top','Cutout Top','Exposed Midriff Top'],k:'nsfwTop',nsfw:true},
  nsfwBottom:{lbl:['Micro Miniskirt','Booty Shorts','Thong','Garter Belt','Slit Skirt','Fishnet Stockings','Lace Shorts','Crotchless Shorts'],k:'nsfwBottom',nsfw:true},
  clothing:{lbl:[
    'School Uniform','Sailor Uniform','Tracksuit','Casual Streetwear','Sporty Outfit','Sleepwear / Pajamas','Swimsuit','One-Piece Swimsuit',
    'Formal Suit','Blazer & Pants','Little Black Dress','Evening Gown','Wedding Dress',
    'Magical Girl','Maid Outfit','Gothic Lolita','Idol Outfit','Cyberpunk Outfit','Kimono','Yukata','Fantasy Armor','Ninja Outfit','Military Uniform'
  ],k:'clothing'},
  clothingAcc:{lbl:['Ribbon Bow','Belt','Choker','Backpack','Suspenders','Gloves','Scarf','Cape','Apron','Tie'],arr:'clothingAcc'},
  bodyParts:{lbl:['Penis (Male)','Vagina','Anus','Nipples','Breasts','Cleavage','Bare Legs','Bare Midriff'],arr:'bodyParts',nsfw:true},
  sockColor:{lbl:['White','Light Gray','Gray','Dark Gray','Black','Pink','Hot Pink','Red','Crimson','Maroon','Peach','Orange','Yellow','Gold','Mint','Green','Dark Green','Olive','Teal','Cyan','Sky Blue','Light Blue','Blue','Navy','Indigo','Lavender','Purple','Violet','Magenta','Beige','Brown','Dark Brown','Silver','Striped','Plaid','Sheer'],k:'sockColor'},
  sockLength:{lbl:['Ankle','Knee-High','Thigh-High','Over-Knee'],k:'sockLength'},
  shoes:{lbl:['School Shoes','Sneakers','Loafers','Heels','Boots','Sandals','Barefoot','Platform'],k:'shoes'},
  shoeColor:{lbl:['White','Light Gray','Gray','Dark Gray','Black','Pink','Hot Pink','Red','Crimson','Maroon','Orange','Yellow','Gold','Green','Dark Green','Olive','Teal','Sky Blue','Light Blue','Blue','Navy','Indigo','Lavender','Purple','Violet','Magenta','Beige','Brown','Dark Brown','Silver'],k:'shoeColor'},
  clothingColor:{lbl:['White','Light Gray','Gray','Dark Gray','Black','Pink','Hot Pink','Red','Crimson','Maroon','Peach','Orange','Yellow','Gold','Mint','Green','Dark Green','Olive','Teal','Cyan','Sky Blue','Light Blue','Blue','Navy','Indigo','Lavender','Purple','Violet','Magenta','Beige','Brown','Dark Brown','Silver','Striped','Plaid','Sheer'],k:'clothingColor'},
  clothingTopColor:{lbl:['White','Light Gray','Gray','Dark Gray','Black','Pink','Hot Pink','Red','Crimson','Maroon','Peach','Orange','Yellow','Gold','Mint','Green','Dark Green','Olive','Teal','Cyan','Sky Blue','Light Blue','Blue','Navy','Indigo','Lavender','Purple','Violet','Magenta','Beige','Brown','Dark Brown','Silver','Striped','Plaid','Sheer'],k:'clothingTopColor'},
  clothingBottomColor:{lbl:['White','Light Gray','Gray','Dark Gray','Black','Pink','Hot Pink','Red','Crimson','Maroon','Peach','Orange','Yellow','Gold','Mint','Green','Dark Green','Olive','Teal','Cyan','Sky Blue','Light Blue','Blue','Navy','Indigo','Lavender','Purple','Violet','Magenta','Beige','Brown','Dark Brown','Silver','Striped','Plaid','Sheer'],k:'clothingBottomColor'},
  nsfwTopColor:{lbl:['White','Light Gray','Gray','Dark Gray','Black','Pink','Hot Pink','Red','Crimson','Peach','Orange','Yellow','Gold','Mint','Green','Teal','Sky Blue','Light Blue','Blue','Navy','Lavender','Purple','Violet','Magenta','Beige','Brown','Silver','Striped','Sheer'],k:'nsfwTopColor'},
  nsfwBottomColor:{lbl:['White','Light Gray','Gray','Dark Gray','Black','Pink','Hot Pink','Red','Crimson','Peach','Orange','Yellow','Gold','Mint','Green','Teal','Sky Blue','Light Blue','Blue','Navy','Lavender','Purple','Violet','Magenta','Beige','Brown','Silver','Striped','Sheer'],k:'nsfwBottomColor'},
  nsfwClothingColor:{lbl:['White','Light Gray','Gray','Dark Gray','Black','Pink','Hot Pink','Red','Crimson','Peach','Orange','Yellow','Gold','Mint','Green','Teal','Sky Blue','Light Blue','Blue','Navy','Lavender','Purple','Violet','Magenta','Beige','Brown','Silver','Striped','Sheer'],k:'nsfwClothingColor'},
  faceAcc:{lbl:['Glasses','Sunglasses','Round Glasses','Headband','Flower Crown','Hair Clip','Halo','Animal Ears','Horns','Veil','Eye Patch'],arr:'faceAcc'},
  expression:{lbl:['Happy','Gentle Smile','Shy','Confident','Sad','Crying','Angry','Shocked','Tired','Dreamy','Mysterious','Seductive','Scared','Laughing','Stoic','Playful'],k:'expression'},
  pose:{lbl:['Standing','Sitting','Lying Down','Crouching','Kneeling','Dancing','Jumping','Running','Floating','Stretching','Fighting Stance','Eating','Drinking','Reading','Sleeping'],arr:'poses'},
  effects:{lbl:['Sparkles','Electricity','Fire','Water Splash','Ice Crystals','Smoke','Magical Aura','Particles','Cherry Blossoms','Stars','Lightning','Energy Orbs'],arr:'effects'},
  liquids:{lbl:['Sweat','Tears','Rain-Soaked','Glistening','Dew Drops','Wet Hair'],arr:'liquids'},
  weapons:{lbl:['Sword','Katana','Dagger','Axe','Spear','Bow & Arrow','Crossbow','Pistol','Rifle','Shotgun','Sniper','Machine Gun','Magic Staff','Magic Wand','Scythe','Hammer','Shield','Grenade','Bazooka','Twin Blades'],arr:'weapons'},
  props:{lbl:['Guitar','Microphone','Violin','Book','Briefcase','Umbrella','Rose','Lantern','Camera','Medical Kit','Potion Bottle','Treasure Chest','Rope','Candle','Teddy Bear','Lollipop','Fan','Broom','Fishing Rod','Letter/Envelope'],arr:'props'},
  electronics:{lbl:['Smartphone','Tablet','Laptop','Gaming Controller','Headphones','Digital Camera','TV Remote','Smart Watch','VR Headset','Drone'],arr:'electronics'},
  otherItems:{lbl:['Crown','Scepter','Mask','Mirror','Hourglass','Scroll','Map','Compass','Bomb','Flag'],arr:'otherItems'},
  environment:{lbl:['School','Rooftop','Beach','Forest','City Street','Cherry Blossom Park','Fantasy Realm','Bedroom','Café','Mountains','Desert','Space','Castle','Night City','Onsen'],k:'environment'},
  style:{lbl:['Anime','Manga / Ink','Digital Painting','Oil Painting','Watercolor','Fantasy Art','Chibi','Retro 90s Anime','Pixel Art','16-bit Pixel Art','32-bit Pixel Art','Sprite Art','Voxel Art','Low Poly','Flat Design','Vector Art','Sketch / Pencil','Cel Shading','Painterly','Concept Art'],k:'style'},
  era:{lbl:['1980s','1990s','2000s','2010s','2020s'],k:'era'},
  animeStudio:{lbl:[
    'Studio Ghibli style','Makoto Shinkai style','Kyoto Animation style','Ufotable style',
    'MAPPA style','Trigger style','Gainax style','Madhouse style',
    'Demon Slayer style','Attack on Titan style','Naruto style','Dragon Ball style',
    'Sailor Moon style','Evangelion style','Akira style','Your Name style'
  ],k:'animeStudio'},
  colorGrade:{lbl:['Pastel Palette','Vibrant / Saturated','HDR Colors','Muted / Desaturated','Black & White','Warm Tones','Cool Tones','Dark Ink','Neon Palette','Vintage / Faded','Duotone','Monochrome Blue','Monochrome Red','Golden Hour Tones','Cyberpunk Colors','Earthy Tones'],k:'colorGrade'},
  stroke:{lbl:['No Outline','Thin Lines','Medium Lines','Thick Lines','Bold Lines','Soft Edges'],k:'stroke'},
  shadow:{lbl:['No Shadows','Soft Shadows','Medium Shadows','Hard Shadows','Dramatic'],k:'shadow'},
  quality:{lbl:['Masterpiece','Best Quality','Ultra Detailed','Sharp Focus','4K','8K','Professional','Cinematic','High Resolution','Award-Winning'],arr:'quality'},
  light:{lbl:['Studio Light','Natural Light','Rim Light','Backlight','Neon Light','Moonlight','Candlelight','Sunlight','Golden Hour','Soft Diffused'],arr:'lights'},
  glow:{lbl:['No Glow','Soft Glow','Warm Glow','Golden Glow','Ethereal Glow','Magical Glow'],k:'glow'},
  smooth:{lbl:['Normal','Smooth Skin','Porcelain','Silky','Textured'],k:'smooth'},
  angle:{lbl:['Eye Level','Low Angle','High Angle',"Bird's Eye",'Side Profile','Over Shoulder'],k:'angle'},
  shot:{lbl:['Extreme Closeup','Face Closeup','Headshot','Bust Shot','Waist Up','Full Body','Full Environment'],k:'shot'},
  look:{lbl:['At Viewer','Down','Up','Away','To the Side','Eyes Closed'],k:'look'},
  lens:{lbl:['Standard','Wide Angle','Telephoto','Fisheye','Macro','85mm Portrait'],k:'lens'},
  lensEffect:{lbl:['None','Bokeh / Blurred BG','Depth of Field','Soft Focus','Focus Face','Focus Body'],k:'lensEffect'},
  negBody:{lbl:['Bad Anatomy','Deformed Hands','Mutated Fingers','Extra Fingers','Missing Fingers','Extra Limbs','Floating Limbs','Deformed Legs','Missing Legs','Extra Legs','Bad Feet','Disconnected Body','Ugly Face','Weird Proportions','Duplicate Character'],arr:'negBody'},
  negQuality:{lbl:['Blurry','Low Quality','JPEG Artifacts','Artifacts','Noise/Grain','Overexposed','Underexposed','Watermark/Text','Cropped','Out of Frame','Flat Colors','Washed Out'],arr:'negQuality'},
  /* NSFW — inline with SFW, hidden until nsfw active */
  nsfwBody:{lbl:['Large Breasts','Small Breasts','Huge Breasts','Big Butt','Slim Waist','Thick Thighs','Curvy Hips','Topless','Nude','Naked','Visible Areolas','Erect Nipples'],arr:'nsfwBody',nsfw:true},
  clothingCondition:{lbl:['Wet','Muddy','Torn','Dirty','Sandy','Blood-Stained','Burnt','Wrinkled','Disheveled','Soaked'],arr:'clothingCondition'},
  nsfwClothing:{lbl:[
    'Bunny Suit','Nurse Outfit','Police Costume','French Maid','Cheerleader',
    'Swimwear','Bikini','Micro Bikini',
    'Lingerie','Pasties Only',
    'See-through','No Bra','Panties Visible','Unbuttoned','Skirt Lifted','Micro Skirt'
  ],arr:'nsfwClothing',nsfw:true},
  nsfwPose:{lbl:['On All Fours','Doggy Style','Missionary','Cowgirl','Reverse Cowgirl','Oral','Anal','Gangbang','Tied Up','Spread Legs','Fingering','Self-Touching'],arr:'nsfwPose',nsfw:true},
  nsfwFluid:{lbl:['Cum','Cum on Face','Cum on Body','Cum Inside','Dripping','Wet/Soaked','Body Oil','Sweat Droplets','Vaginal Fluid','Urine/Squirt','Feces (Scat)','Anal Fluid','Milk/Lactation'],arr:'nsfwFluid',nsfw:true},
  nsfwEnv:{lbl:['In Bed','Bathroom','Shower','Locker Room','Sex Dungeon','Glory Hole','Public Outdoor','Hotel Room','Adult Club','Onsen Bath'],arr:'nsfwEnv',nsfw:true},
  nsfwIndicator:{lbl:['Diaper (Baby)','Female Diaper','Semen Stain','Urine Stain','Fecal Stain','Sanitary Pad','Female Discharge','Anal Plug','Vibrator','Dildo','Sex Toy','Collar & Leash','Handcuffs/BDSM'],arr:'nsfwIndicator',nsfw:true},
  nsfwShot:{lbl:['Crotch Shot','Upskirt','Closeup Vagina','Closeup Penis','Closeup Anus','Closeup Nipples','Closeup Breasts','Between Legs','Panty Shot','Nude Macro'],arr:'nsfwShot',nsfw:true}
};

/* ═══════════════════════════════════
   BLUEPRINT BUILD
═══════════════════════════════════ */
function buildBlueprint(){
  const g=document.getElementById('bpGrid');
  // Create grid wrapper
  const gridWrapper = document.createElement('div');
  gridWrapper.className='bp-grid';
  
  BP_CELLS.forEach(c=>{
    const cell=document.createElement('div');
    cell.className='bp-cell'; cell.id=c.id;
    cell.innerHTML=`<i class="fas ${c.icon}"></i><span class="bp-lbl">${c.lbl}</span><span class="bp-tick">✓</span>`;
    gridWrapper.appendChild(cell);
  });
  
  g.appendChild(gridWrapper);
}
/* ═══════════════════════════════════
   RENDER HELPERS
═══════════════════════════════════ */
function makeSingle(gid,lbl,val,k,nsfw=false){
  const g=document.getElementById(gid);if(!g)return;
  lbl.forEach((l,i)=>{
    // Category header — non-clickable divider
    if(l.startsWith('—')){
      const sep=document.createElement('div');
      sep.className='og-sep';
      const txt=l.replace(/—/g,'').trim();
      sep.textContent=txt;
      sep.setAttribute('data-en', txt);
      g.appendChild(sep);
      return;
    }
    const v=val?val[i]:l.toLowerCase();
    const b=document.createElement('button');
    b.className='ob'+(nsfw?' rb':'')+(S[k]===v?' on':'');
    b.setAttribute('data-en', l);
    b.innerHTML=`<span>${l}</span>`;
    b.addEventListener('click',()=>{
      if(S[k]===v){S[k]=null;b.classList.remove('on');}
      else{g.querySelectorAll('.ob').forEach(x=>x.classList.remove('on'));b.classList.add('on');S[k]=v;}
      // When selecting NSFW: clear SFW counterpart silently
      if(nsfw && S[k]!==null){
        if(k==='nsfwTop' && S.clothingTop){ S.clothingTop=null; _syncGrid('clothingTopGrid',()=>false); }
        if(k==='nsfwBottom' && S.clothingBottom){ S.clothingBottom=null; _syncGrid('clothingBottomGrid',()=>false); }
      }
      // When selecting SFW: clear NSFW counterpart silently
      if(!nsfw && S[k]!==null){
        if(k==='clothingTop' && S.nsfwTop){ S.nsfwTop=null; _syncGrid('nsfwTopGrid',()=>false); }
        if(k==='clothingBottom' && S.nsfwBottom){ S.nsfwBottom=null; _syncGrid('nsfwBottomGrid',()=>false); }
      }
      rebuild();
    });
    g.appendChild(b);
  });
}

function makeMulti(gid,lbl,arr,nsfw=false,inlineHide=false){
  const g=document.getElementById(gid);if(!g)return;
  lbl.forEach(l=>{
    const v=l.toLowerCase();
    const b=document.createElement('button');
    b.className='ob'+(nsfw?' rb':'')+(inlineHide?' nsfw-item':'')+(S[arr].includes(v)?' on':'');
    b.setAttribute('data-en', l);
    b.innerHTML=`<span>${l}</span>`;
    b.addEventListener('click',()=>{
      b.classList.toggle('on');
      const i=S[arr].indexOf(v);
      if(i>-1)S[arr].splice(i,1); else S[arr].push(v);
      rebuild();
    });
    g.appendChild(b);
  });
}

function renderColors(gid,arr,sk,toggleable=false){
  const g=document.getElementById(gid);if(!g)return;
  arr.forEach((col,i)=>{
    const b=document.createElement('button');
    const isOn=S[sk]===col.id;
    const fg=col.fg||_fgFor(col.m);
    b.className='cb'+(isOn?' on':'');
    const muted=col.m+'cc'; b.style.cssText=`background:${muted};color:${fg};border-color:${isOn?'rgba(255,255,255,.8)':'transparent'};`;
    b.title=col.n;
    b.setAttribute('data-en', col.n);
    b.innerHTML=`<span>${col.n}</span>`;
    b.addEventListener('click',()=>{
      if(toggleable&&S[sk]===col.id){
        S[sk]=null;b.classList.remove('on');b.style.borderColor='transparent';
      } else {
        g.querySelectorAll('.cb').forEach((x,xi)=>{
          x.classList.remove('on');x.style.borderColor='transparent';
        });
        b.classList.add('on');b.style.borderColor='white';S[sk]=col.id;
      }
      rebuild();
    });
    g.appendChild(b);
  });
}

// Simple color swatches using CSS color names — for socks & shoes
// ── Flat lookup: name → {bg, fg}
const SIMPLE_COLOR_MAP = {
  // Neutrals
  'White':       {bg:'#f8f8f8', fg:'#1a1a2e'},
  'Light Gray':  {bg:'#d1d5db', fg:'#1a1a2e'},
  'Gray':        {bg:'#6b7280', fg:'#f0f4ff'},
  'Dark Gray':   {bg:'#374151', fg:'#f0f4ff'},
  'Black':       {bg:'#0f0f0f', fg:'#f0f4ff'},
  // Reds & Pinks
  'Pink':        {bg:'#f472b6', fg:'#1a1a2e'},
  'Hot Pink':    {bg:'#ec4899', fg:'#f0f4ff'},
  'Red':         {bg:'#ef4444', fg:'#f0f4ff'},
  'Crimson':     {bg:'#b91c1c', fg:'#f0f4ff'},
  'Maroon':      {bg:'#7f1d1d', fg:'#f0f4ff'},
  // Warm
  'Peach':       {bg:'#fcd5b0', fg:'#1a1a2e'},
  'Orange':      {bg:'#f97316', fg:'#f0f4ff'},
  'Yellow':      {bg:'#fbbf24', fg:'#1a1a2e'},
  'Gold':        {bg:'#ca8a04', fg:'#f0f4ff'},
  // Greens
  'Mint':        {bg:'#6ee7b7', fg:'#1a1a2e'},
  'Green':       {bg:'#16a34a', fg:'#f0f4ff'},
  'Dark Green':  {bg:'#14532d', fg:'#f0f4ff'},
  'Olive':       {bg:'#4d7c0f', fg:'#f0f4ff'},
  'Teal':        {bg:'#0d9488', fg:'#f0f4ff'},
  // Blues
  'Cyan':        {bg:'#22d3ee', fg:'#1a1a2e'},
  'Sky Blue':    {bg:'#7dd3fc', fg:'#1a1a2e'},
  'Light Blue':  {bg:'#93c5fd', fg:'#1a1a2e'},
  'Blue':        {bg:'#3b82f6', fg:'#f0f4ff'},
  'Navy':        {bg:'#1e3a5f', fg:'#f0f4ff'},
  'Indigo':      {bg:'#4338ca', fg:'#f0f4ff'},
  // Purples
  'Lavender':    {bg:'#c4b5fd', fg:'#1a1a2e'},
  'Purple':      {bg:'#7c3aed', fg:'#f0f4ff'},
  'Violet':      {bg:'#8b5cf6', fg:'#f0f4ff'},
  'Magenta':     {bg:'#d946ef', fg:'#f0f4ff'},
  // Earth
  'Beige':       {bg:'#d4b896', fg:'#1a1a2e'},
  'Brown':       {bg:'#92400e', fg:'#f0f4ff'},
  'Dark Brown':  {bg:'#451a03', fg:'#f0f4ff'},
  // Metallics
  'Silver':      {bg:'#94a3b8', fg:'#1a1a2e'},
  // Patterns
  'Striped':     {bg:'repeating-linear-gradient(45deg,#e5e7eb 0,#e5e7eb 4px,#374151 4px,#374151 8px)', fg:'#1a1a2e'},
  'Plaid':       {bg:'repeating-linear-gradient(0deg,rgba(220,38,38,.4) 0,rgba(220,38,38,.4) 3px,transparent 3px,transparent 12px),repeating-linear-gradient(90deg,rgba(220,38,38,.4) 0,rgba(220,38,38,.4) 3px,transparent 3px,transparent 12px),#1e3a5f', fg:'#f0f4ff'},
  'Sheer':       {bg:'rgba(200,200,200,.18)', fg:'#e8eaf0'},
};

// ── Grouped palette for the modal
const COLOR_GROUPS = [
  { label:'Neutrals',      colors:['White','Light Gray','Gray','Dark Gray','Black'] },
  { label:'Reds & Pinks',  colors:['Pink','Hot Pink','Red','Crimson','Maroon'] },
  { label:'Warm',          colors:['Peach','Orange','Yellow','Gold'] },
  { label:'Greens',        colors:['Mint','Green','Dark Green','Olive','Teal'] },
  { label:'Blues',         colors:['Cyan','Sky Blue','Light Blue','Blue','Navy','Indigo'] },
  { label:'Purples',       colors:['Lavender','Purple','Violet','Magenta'] },
  { label:'Earth Tones',   colors:['Beige','Brown','Dark Brown'] },
  { label:'Metallics',     colors:['Gold','Silver'] },
  { label:'Patterns',      colors:['Striped','Plaid','Sheer'] },
];
function renderSimpleColors(gid, labels, sk){
  const g = document.getElementById(gid); if(!g) return;
  labels.forEach(name => {
    const col = SIMPLE_COLOR_MAP[name] || {bg:'#444', fg:'#fff'};
    const b = document.createElement('button');
    const isOn = S[sk] === name.toLowerCase();
    b.className = 'cb' + (isOn ? ' on' : '');
    b.style.cssText = `background:${col.bg};color:${col.fg};border-color:${isOn ? 'rgba(255,255,255,.85)' : 'transparent'};min-height:28px;`;
    b.title = name;
    b.setAttribute('data-en', name);
    b.setAttribute('data-color', 'true'); // protect from applyLang translation
    b.innerHTML = `<span style="font-size:.6rem;font-weight:700;">${name}</span>`;
    b.addEventListener('click', () => {
      const val = name.toLowerCase();
      if(S[sk] === val){ S[sk] = null; b.classList.remove('on'); b.style.borderColor = 'transparent'; }
      else {
        g.querySelectorAll('.cb').forEach(x => { x.classList.remove('on'); x.style.borderColor = 'transparent'; });
        b.classList.add('on'); b.style.borderColor = 'rgba(255,255,255,.85)'; S[sk] = val;
      }
      rebuild();
    });
    g.appendChild(b);
  });
}

// helper: pick readable fg for a bg hex
function _fgFor(hex){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return (r*299+g*587+b*114)/1000>140?'#1a1a2e':'#f0f4ff';
}

function _initColorPickerPopup(){
  const overlay  = document.getElementById('cpOverlay');
  const grid     = document.getElementById('cpGrid');
  const title    = document.getElementById('cpTitle');
  const subtitle = document.getElementById('cpSubtitle');
  const icon     = document.getElementById('cpIcon');
  const swatch   = document.getElementById('cpSwatch');
  const selName  = document.getElementById('cpSelectedName');
  const closeBtn = document.getElementById('cpClose');
  const doneBtn  = document.getElementById('cpDone');
  const clearBtn = document.getElementById('cpClearBtn');
  if(!overlay || !grid) return;

  let _sk = null;

  function _refreshPreview(){
    const val = S[_sk];
    if(val){
      const key = val.charAt(0).toUpperCase()+val.slice(1);
      const col = SIMPLE_COLOR_MAP[key]||{bg:'#888'};
      swatch.style.background = col.bg;
      swatch.classList.add('has-color');
      selName.textContent = key;
    } else {
      swatch.style.background = '';
      swatch.classList.remove('has-color');
      selName.textContent = 'No color selected';
    }
  }

  const CP_META = {
    sockColor:          {icon:'🧦', title:'Sock Color',       sub:'Choose a color for your socks'},
    shoeColor:          {icon:'👟', title:'Footwear Color',   sub:'Choose a color for your shoes'},
    clothingColor:      {icon:'👗', title:'Outfit Color',     sub:'Choose a color for the full outfit'},
    clothingTopColor:   {icon:'👕', title:'Top Color',        sub:'Choose a color for the top'},
    clothingBottomColor:{icon:'👖', title:'Bottom Color',     sub:'Choose a color for the bottom'},
    nsfwTopColor:       {icon:'👙', title:'Top Color',        sub:'Choose a color for the top'},
    nsfwBottomColor:    {icon:'🩲', title:'Bottom Color',     sub:'Choose a color for the bottom'},
    nsfwClothingColor:  {icon:'👗', title:'Outfit Color',     sub:'Choose a color for the outfit'},
  };

  function openPicker(sk){
    _sk = sk;
    const m = CP_META[sk] || {icon:'🎨', title:'Color', sub:'Choose a color'};
    icon.textContent     = m.icon;
    title.textContent    = m.title;
    subtitle.textContent = m.sub;

    grid.innerHTML = '';
    COLOR_GROUPS.forEach(group => {
      // Filter to colors available for this sk
      const available = group.colors.filter(name => D[sk].lbl.includes(name));
      if(!available.length) return;

      // Section label
      const sep = document.createElement('div');
      sep.className = 'cp-group-label';
      sep.textContent = group.label;
      grid.appendChild(sep);

      // Color row
      const row = document.createElement('div');
      row.className = 'cp-color-row';
      available.forEach((name, idx) => {
        const col = SIMPLE_COLOR_MAP[name] || {bg:'#444', fg:'#fff'};
        const b = document.createElement('button');
        const isOn = S[sk] === name.toLowerCase();
        b.className = 'cp-swatch-btn' + (isOn ? ' on' : '');
        b.style.animationDelay = (idx * 0.025) + 's';
        b.title = name;
        b.setAttribute('data-color','true');
        b.innerHTML = `<span class="cp-dot" style="background:${col.bg};"></span><span class="cp-swatch-lbl">${name}</span>`;
        b.addEventListener('click', () => {
          const val = name.toLowerCase();
          grid.querySelectorAll('.cp-swatch-btn').forEach(x => x.classList.remove('on'));
          if(S[_sk] === val){ S[_sk] = null; }
          else { b.classList.add('on'); S[_sk] = val; }
          _refreshPreview();
          _updateColorDot(_sk);
          rebuild();
        });
        row.appendChild(b);
      });
      grid.appendChild(row);
    });

    _refreshPreview();
    overlay.classList.add('open');
  }

  function closePicker(){
    overlay.classList.remove('open');
    setTimeout(() => { _sk = null; }, 300);
  }

  closeBtn.addEventListener('click', closePicker);
  doneBtn.addEventListener('click', closePicker);
  clearBtn.addEventListener('click', () => {
    if(!_sk) return;
    S[_sk] = null;
    grid.querySelectorAll('.cp-swatch-btn').forEach(x => x.classList.remove('on'));
    _refreshPreview();
    _updateColorDot(_sk);
    rebuild();
  });
  overlay.addEventListener('click', e => { if(e.target===overlay) closePicker(); });

  // Universal: attach color picker trigger to any grid
  // map: gridId → { colorKey, stateKey }
  const TRIGGER_MAP = [
    {gid:'clothingGrid',      colorKey:'clothingColor',       stateKey:'clothing'},
    {gid:'clothingTopGrid',   colorKey:'clothingTopColor',    stateKey:'clothingTop'},
    {gid:'clothingBottomGrid',colorKey:'clothingBottomColor', stateKey:'clothingBottom'},
    {gid:'nsfwTopGrid',       colorKey:'nsfwTopColor',        stateKey:'nsfwTop'},
    {gid:'nsfwBottomGrid',    colorKey:'nsfwBottomColor',     stateKey:'nsfwBottom'},
    {gid:'nsfwClothingGrid',  colorKey:'nsfwClothingColor',   stateKey:'nsfwClothing'},
    {gid:'sockLengthGrid',    colorKey:'sockColor',           stateKey:'sockLength'},
    {gid:'shoesGrid',         colorKey:'shoeColor',           stateKey:'shoes'},
  ];

  function attachAllTriggers(){
    TRIGGER_MAP.forEach(({gid, colorKey, stateKey}) => {
      const g = document.getElementById(gid);
      if(!g) return;
      g.querySelectorAll('.ob').forEach(btn => {
        btn.addEventListener('click', () => {
          setTimeout(() => {
            if(S[stateKey]){
              openPicker(colorKey);
            } else {
              S[colorKey] = null;
              _updateColorDot(colorKey);
              closePicker();
            }
          }, 50);
        });
      });
    });
  }

  setTimeout(() => { attachAllTriggers(); }, 100);

  window._openColorPicker  = openPicker;
  window._closeColorPicker = closePicker;
}

function _updateColorDot(colorKey){
  // map colorKey → which grid and which stateKey to check
  const DOT_MAP = {
    sockColor:          {gid:'sockLengthGrid',    stateKey:'sockLength'},
    shoeColor:          {gid:'shoesGrid',          stateKey:'shoes'},
    clothingColor:      {gid:'clothingGrid',       stateKey:'clothing'},
    clothingTopColor:   {gid:'clothingTopGrid',    stateKey:'clothingTop'},
    clothingBottomColor:{gid:'clothingBottomGrid', stateKey:'clothingBottom'},
    nsfwTopColor:       {gid:'nsfwTopGrid',        stateKey:'nsfwTop'},
    nsfwBottomColor:    {gid:'nsfwBottomGrid',     stateKey:'nsfwBottom'},
    nsfwClothingColor:  {gid:'nsfwClothingGrid',   stateKey:'nsfwClothing'},
  };
  const entry = DOT_MAP[colorKey]; if(!entry) return;
  const g = document.getElementById(entry.gid); if(!g) return;
  g.querySelectorAll('.ob').forEach(btn => {
    const old = btn.querySelector('.color-dot');
    if(old) old.remove();
    const span = btn.querySelector('span');
    const val  = span ? span.textContent.toLowerCase() : '';
    if(S[entry.stateKey] === val && S[colorKey]){
      const key = S[colorKey].charAt(0).toUpperCase() + S[colorKey].slice(1);
      const col = SIMPLE_COLOR_MAP[key] || {bg:'#888', fg:'#fff'};
      const dot = document.createElement('span');
      dot.className = 'color-dot';
      dot.style.cssText = `display:inline-flex;align-items:center;gap:3px;background:${col.bg};border-radius:20px;padding:1px 6px 1px 3px;margin-left:5px;border:1.5px solid rgba(255,255,255,.5);vertical-align:middle;position:relative;z-index:2;`;
      dot.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.35);display:inline-block;"></span><span style="font-size:.55rem;font-weight:700;color:${col.fg||'#fff'};text-shadow:0 1px 3px rgba(0,0,0,.6);white-space:nowrap;">${key}</span>`;
      btn.appendChild(dot);
    }
  });
}

function renderSkins(){
  const g=document.getElementById('skinGrid');if(!g)return;
  SKINS.forEach((s,i)=>{
    const b=document.createElement('button');
    b.className='sb'+(S.skin===s.val?' on':'');
    b.style.cssText=`background:${s.bg};color:${s.fg};border-color:${S.skin===s.val?'white':s.bg}`;
    b.innerHTML=`<span>${s.lbl}</span>`;
    b.setAttribute('data-en', s.lbl);
    b.addEventListener('click',()=>{
      if(S.skin===s.val){S.skin=null;b.classList.remove('on');b.style.borderColor=s.bg;}
      else{
        document.querySelectorAll('.sb').forEach((x,xi)=>{x.classList.remove('on');x.style.borderColor=SKINS[xi].bg;});
        b.classList.add('on');b.style.borderColor='white';S.skin=s.val;
      }
      rebuild();
    });
    g.appendChild(b);
  });
}

/* ═══════════════════════════════════
   NSFW SEPARATORS / INLINE ITEMS
═══════════════════════════════════ */

function toggleNSFW(on){
  // Body parts separator + grid (Camera tab)
  const bpSep=document.getElementById('sep-bodyparts');
  if(bpSep) bpSep.classList.toggle('vis',on);
  const bpGrid=document.getElementById('bodyPartsGrid');
  if(bpGrid) bpGrid.style.display=on?'grid':'none';
  // Show/hide .nsfw-item buttons
  document.querySelectorAll('.nsfw-item').forEach(b=>b.style.display=on?'block':'none');
  // Show/hide NSFW grids
  ['nsfwBodyGrid','nsfwTopGrid','nsfwBottomGrid','nsfwClothingGrid','nsfwPoseGrid',
   'nsfwFluidGrid','nsfwIndicatorGrid','nsfwEnvGrid','nsfwShotGrid'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.style.display=on?'grid':'none';
  });
  document.getElementById('leftPanel').classList.toggle('nsfw-active',on);
}

/* ═══════════════════════════════════
   INIT
═══════════════════════════════════ */
/* ═══════════════════════════════════
   CHARACTER CARDS SYSTEM
═══════════════════════════════════ */
// Silhouette SVG strings per gender
const SIL = {
  female: `<i class="fa-solid fa-person-dress"></i>`,
  male:   `<i class="fa-solid fa-person"></i>`,
  futa:   `<i class="fa-solid fa-person-half-dress"></i>`,
  unset:  `<i class="fa-solid fa-person-circle-plus"></i>`
};

const GENDER_CFG = {
  female: { cls:'female', label:'Female',   prompt:'1girl'                },
  male:   { cls:'male',   label:'Male',     prompt:'1boy'                 },
  futa:   { cls:'futa',   label:'Futanari', prompt:'androgynous, futanari'}
};

function buildCharCountText(){
  const active = S.characters.filter(Boolean);
  if(!active.length) return '';
  const c={female:0,male:0,futa:0};
  active.forEach(g=>c[g]++);
  const parts=[];
  if(c.female===1)parts.push('1girl'); else if(c.female>1)parts.push(c.female+'girls');
  if(c.male===1)  parts.push('1boy');  else if(c.male>1)  parts.push(c.male+'boys');
  if(c.futa>0)    parts.push('androgynous, futanari');
  if(active.length>=2) parts.push('multiple characters');
  return parts.join(', ');
}

function updateCharWarn(){
  const active = S.characters.filter(Boolean).length;
  const warn = document.getElementById('charWarn');
  if(warn) warn.classList.toggle('vis', active >= 2);
}

function renderCharCards(){
  const row = document.getElementById('charCardsRow');
  if(!row) return;
  row.innerHTML='';

  S.characters.forEach((gender,i)=>{
    const isActive = gender !== null;
    const cfg = isActive ? GENDER_CFG[gender] : null;

    const card = document.createElement('div');
    card.className = 'char-card' + (isActive ? ' active gc-'+gender : '');
    card.dataset.idx = i;

    card.innerHTML = `
      ${isActive ? `<div class="char-card-del" data-idx="${i}">×</div>` : ''}
      <div class="char-silhouette">${isActive ? SIL[gender] : SIL.unset}</div>
      <div class="char-card-num">Char ${i+1}</div>
      <div class="char-card-badge ${isActive ? cfg.cls : 'unset'}">${isActive ? cfg.label : 'Set gender'}</div>
    `;

    card.addEventListener('click', e=>{
      if(e.target.closest('.char-card-del')) return;
      openGenderModal(i);
    });

    const del = card.querySelector('.char-card-del');
    if(del) del.addEventListener('click', e=>{
      e.stopPropagation();
      S.characters[i]=null;
      renderCharCards(); updateCharWarn(); rebuild();
    });

    row.appendChild(card);
  });
}

/* Gender modal */
let _gIdx = null;

function openGenderModal(idx){
  _gIdx = idx;
  const cur = S.characters[idx];
  const sub = document.getElementById('genderModalSub');
  if(sub) sub.textContent = 'Character '+(idx+1);
  document.querySelectorAll('.gender-opt-btn').forEach(btn=>{
    const g=btn.dataset.gender;
    btn.className = 'gender-opt-btn opt-'+g + (cur===g?' sel-'+g:'');
  });
  document.getElementById('genderOverlay').classList.add('open');
}

function closeGenderModal(){
  document.getElementById('genderOverlay').classList.remove('open');
  _gIdx=null;
}

function initGenderModal(){
  document.querySelectorAll('.gender-opt-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      if(_gIdx===null) return;
      S.characters[_gIdx]=btn.dataset.gender;
      closeGenderModal();
      renderCharCards(); updateCharWarn(); rebuild();
    });
  });
  document.getElementById('genderModalClose').addEventListener('click', closeGenderModal);
  document.getElementById('genderModalReset').addEventListener('click',()=>{
    if(_gIdx===null) return;
    S.characters[_gIdx]=null;
    closeGenderModal();
    renderCharCards(); updateCharWarn(); rebuild();
  });
  document.getElementById('genderOverlay').addEventListener('click', e=>{
    if(e.target===document.getElementById('genderOverlay')) closeGenderModal();
  });
}

function initCharCards(){
  renderCharCards();
  document.getElementById('charCardsClrBtn').addEventListener('click',()=>{
    S.characters=[null,null,null];
    renderCharCards(); updateCharWarn(); rebuild();
  });
}

function _initClothingMutualExclusion(){
  // ── Full Outfit selected → show conflict + clear Top & Bottom ──
  const fullGrid = document.getElementById('clothingGrid');
  if(fullGrid) fullGrid.querySelectorAll('.ob').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      setTimeout(()=>{
        if(S.clothing){
          const hadTop    = S.clothingTop !== null;
          const hadBottom = S.clothingBottom !== null;
          if(hadTop || hadBottom){
            // Show conflict toast
            toastConflict(S.clothing, hadTop ? S.clothingTop : S.clothingBottom);
          }
          S.clothingTop = null;
          S.clothingBottom = null;
          document.getElementById('clothingTopGrid').querySelectorAll('.ob').forEach(b=>b.classList.remove('on'));
          document.getElementById('clothingBottomGrid').querySelectorAll('.ob').forEach(b=>b.classList.remove('on'));
          rebuild();
        }
      }, 0);
    });
  });

  // ── Top or Bottom selected → show conflict + clear Full Outfit ──
  ['clothingTopGrid','clothingBottomGrid'].forEach(gid=>{
    const g = document.getElementById(gid);
    if(!g) return;
    g.querySelectorAll('.ob').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        setTimeout(()=>{
          if(S.clothingTop !== null || S.clothingBottom !== null){
            if(S.clothing){
              toastConflict(S.clothingTop || S.clothingBottom, S.clothing);
              S.clothing = null;
              document.getElementById('clothingGrid').querySelectorAll('.ob').forEach(b=>b.classList.remove('on'));
              rebuild();
            }
          }
        }, 0);
      });
    });
  });
}

function init(){
  buildBlueprint();
  /* Character */
  initCharCards();
  initGenderModal();
  makeSingle('ageGrid',   D.age.lbl,    D.age.val,   'age');
  renderSkins();
  makeSingle('bodyGrid',  D.body.lbl,   D.body.val,  'body');
  makeMulti('nsfwBodyGrid',D.nsfwBody.lbl,'nsfwBody',true,false);
  /* Appearance */
  renderColors('hairColorGrid',  HAIR_COLORS,'hairColor1');
  renderColors('hairColor2Grid', HAIR_COLORS,'hairColor2',true);
  makeSingle('hairstyleGrid',D.hairstyle.lbl,null,'hairstyle');
  renderColors('eyeColorGrid', EYE_COLORS,'eyeColor');
  makeSingle('eyeShapeGrid',D.eyeShape.lbl,null,'eyeShape');
  /* Outfit */
  makeSingle('clothingTopGrid',    D.clothingTop.lbl,    null, 'clothingTop');
  makeSingle('nsfwTopGrid',        D.nsfwTop.lbl,        null, 'nsfwTop',    true);
  makeSingle('clothingBottomGrid', D.clothingBottom.lbl, null, 'clothingBottom');
  makeSingle('nsfwBottomGrid',     D.nsfwBottom.lbl,     null, 'nsfwBottom', true);
  makeSingle('clothingGrid',D.clothing.lbl,null,'clothing');
  // Mutual exclusion: selecting a Full Outfit clears Top+Bottom, and vice versa
  _initClothingMutualExclusion();
  makeMulti('nsfwClothingGrid',D.nsfwClothing.lbl,'nsfwClothing',true,false);
  makeMulti('clothingConditionGrid', D.clothingCondition.lbl, 'clothingCondition');
  makeMulti('bodyPartsGrid',   D.bodyParts.lbl,   'bodyParts',   true, true);
  makeMulti('clothingAccGrid', D.clothingAcc.lbl, 'clothingAcc');
  makeSingle('sockLengthGrid', D.sockLength.lbl,  null,'sockLength');
  makeSingle('shoesGrid',      D.shoes.lbl,       null,'shoes');
  _initColorPickerPopup();
  makeMulti('faceAccGrid',     D.faceAcc.lbl,     'faceAcc');
  /* Mood */
  makeSingle('expressionGrid', D.expression.lbl,null,'expression');
  makeMulti('poseGrid',   D.pose.lbl,   'poses');
  makeMulti('nsfwPoseGrid',D.nsfwPose.lbl,'nsfwPose',true,false);
  makeMulti('effectsGrid',D.effects.lbl,'effects');
  makeMulti('liquidsGrid',D.liquids.lbl,'liquids');
  makeMulti('nsfwFluidGrid',D.nsfwFluid.lbl,'nsfwFluid',true,false);
  /* Tools */
  makeMulti('weaponGrid',      D.weapons.lbl,     'weapons');
  makeMulti('propsGrid',       D.props.lbl,       'props');
  makeMulti('electronicsGrid', D.electronics.lbl, 'electronics');
  makeMulti('otherItemsGrid',  D.otherItems.lbl,  'otherItems');
  makeMulti('nsfwIndicatorGrid',D.nsfwIndicator.lbl,'nsfwIndicator',true,false);
  /* Scene */
  makeSingle('envGrid',  D.environment.lbl,null,'environment');
  makeMulti('nsfwEnvGrid',D.nsfwEnv.lbl,'nsfwEnv',true,false);
  makeSingle('styleGrid',D.style.lbl,null,'style');
  makeSingle('eraGrid',  D.era.lbl,  null,'era');
  makeSingle('animeStudioGrid', D.animeStudio.lbl, null, 'animeStudio');
  makeSingle('colorGradeGrid', D.colorGrade.lbl, null, 'colorGrade');
  /* Camera */
  makeSingle('angleGrid',     D.angle.lbl,     null,'angle');
  makeSingle('shotGrid',      D.shot.lbl,      null,'shot');
  makeMulti('nsfwShotGrid',D.nsfwShot.lbl,'nsfwShot',true,false);
  makeSingle('lookGrid',      D.look.lbl,      null,'look');
  makeSingle('lensGrid',      D.lens.lbl,      null,'lens');
  makeSingle('lensEffectGrid',D.lensEffect.lbl,null,'lensEffect');
  /* Quality */
  makeSingle('strokeGrid', D.stroke.lbl, null,'stroke');
  makeSingle('shadowGrid', D.shadow.lbl, null,'shadow');
  makeMulti('qualityGrid', D.quality.lbl,'quality');
  makeMulti('lightGrid',   D.light.lbl,  'lights');
  makeSingle('glowGrid',   D.glow.lbl,   null,'glow');
  makeSingle('smoothGrid', D.smooth.lbl, null,'smooth');
  /* Negative */
  makeMulti('negBodyGrid',D.negBody.lbl,'negBody');
  makeMulti('negQualityGrid',D.negQuality.lbl,'negQuality');

  buildCounterDots();
  attachEvents();
  renderFavList();
  // Hide all NSFW items and grids initially
  document.querySelectorAll('.nsfw-item').forEach(b=>b.style.display='none');
  ['nsfwBodyGrid','nsfwTopGrid','nsfwBottomGrid','nsfwClothingGrid','bodyPartsGrid','nsfwPoseGrid',
   'nsfwFluidGrid','nsfwIndicatorGrid','nsfwEnvGrid','nsfwShotGrid'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.style.display='none';
  });
}

/* ═══════════════════════════════════
   EVENTS
═══════════════════════════════════ */
function attachEvents(){
  /* tabs — works with grouped tab structure */
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));
    document.querySelectorAll('.cat').forEach(x=>x.classList.remove('on'));
    t.classList.add('on');
    const catEl=document.getElementById('cat-'+t.dataset.c);
    if(catEl) catEl.classList.add('on');
  }));

  /* theme */
  document.getElementById('themeBtn').addEventListener('click',e=>{e.stopPropagation();document.getElementById('ttray').classList.toggle('open');});
  document.addEventListener('click',e=>{
    if(!e.target.closest('.tw')) document.getElementById('ttray').classList.remove('open');
    if(!e.target.closest('.fav-wrap')&&!e.target.closest('#favOpenBtn')) document.getElementById('favDropdown').classList.remove('open');
  });
  document.getElementById('ttray').addEventListener('click',e=>e.stopPropagation());
  document.querySelectorAll('.tdot').forEach(d=>d.addEventListener('click',()=>{
    document.querySelectorAll('.tdot').forEach(x=>x.classList.remove('on'));
    d.classList.add('on');
    const t=d.dataset.t,isL=document.body.classList.contains('light');
    document.body.className=(isL?'light ':'')+( t?'t-'+t:'');
  }));

  /* light */
  document.getElementById('lightBtn').addEventListener('click',()=>{
    document.body.classList.toggle('light');
    document.getElementById('lightBtn').classList.toggle('on');
  });

  /* NSFW */
  document.getElementById('nsfwBtn').addEventListener('click',()=>{
    if(S.nsfw){
      // Already ON — just toggle off
      S.nsfw = false;
      document.getElementById('nsfwBtn').classList.remove('on');
      toggleNSFW(false);
      rebuild();
    } else {
      // Turning ON — check if already confirmed
      if(sessionStorage.getItem('aps_age_confirmed') === '1'){
        S.nsfw = true;
        document.getElementById('nsfwBtn').classList.add('on');
        toggleNSFW(true);
        rebuild();
      } else {
        // Show age gate
        document.getElementById('agOverlay').classList.add('open');
      }
    }
  });

  document.getElementById('agConfirm').addEventListener('click',()=>{
    sessionStorage.setItem('aps_age_confirmed','1');
    document.getElementById('agOverlay').classList.remove('open');
    S.nsfw = true;
    document.getElementById('nsfwBtn').classList.add('on');
    toggleNSFW(true);
    rebuild();
  });

  document.getElementById('agCancel').addEventListener('click',()=>{
    document.getElementById('agOverlay').classList.remove('open');
  });

  // Close on overlay click
  document.getElementById('agOverlay').addEventListener('click', e=>{
    if(e.target === document.getElementById('agOverlay'))
      document.getElementById('agOverlay').classList.remove('open');
  });

  /* Favourites dropdown */
  document.getElementById('favOpenBtn').addEventListener('click',e=>{
    e.stopPropagation();
    document.getElementById('favDropdown').classList.toggle('open');
  });
  document.getElementById('favDropdown').addEventListener('click',e=>e.stopPropagation());

  /* Fav/Preset tabs */


  /* Save favourite */
  document.getElementById('saveFavBtn').addEventListener('click',()=>{
    const pos=buildPosText();
    if(!pos||pos==='') return toast('Nothing to save yet!','warn');
    openModal('Save Favourite','Give this prompt a name','',name=>{
      if(!name.trim()) return;
      const fav = {id:Date.now(),name:name.trim(),pos,neg:buildNegText(),date:new Date().toLocaleDateString()};
      S.favourites.unshift(fav);
      if(S.favourites.length>50)S.favourites.pop();
      localStorage.setItem('aps6Favs',JSON.stringify(S.favourites));
      renderFavList();
      toast('Saved: '+name.trim()+' ⭐');
      // ── Auto-sync to Firestore ──
      const u = window._currentUser;
      if(u && window._fbFavs){
        window._fbFavs.save(u.uid, fav)
          .then(() => toast('☁️ Synced to cloud'))
          .catch(e => console.warn('Firestore save error:', e));
      }
    });
  });


  document.getElementById('clearFavsBtn').addEventListener('click',()=>{
    S.favourites=[];localStorage.removeItem('aps6Favs');renderFavList();toast('Favourites cleared');
    const u = window._currentUser;
    if(u && window._fbFavs){
      window._fbFavs.clear(u.uid).catch(console.warn);
    }
  });

  /* Copy */
  document.getElementById('copyBtn').addEventListener('click',()=>{
    const pos=getFinalPos(),neg=getFinalNeg();
    if(!pos) return toast('Nothing to copy yet!','warn');
    navigator.clipboard.writeText(`Positive:\n${pos}\n\nNegative:\n${neg}`).then(()=>{
      const b=document.getElementById('copyBtn');
      b.innerHTML='<i class="fas fa-check"></i> Copied!';b.classList.add('ok');
      setTimeout(()=>{b.innerHTML='<i class="fas fa-copy"></i> <span data-i18n="copy_full">Copy Full Prompt</span>';b.classList.remove('ok');},2000);
      toast('Full prompt copied!');
    });
  });
  document.getElementById('copyPosBtn').addEventListener('click',()=>{const p=getFinalPos();if(p)navigator.clipboard.writeText(p).then(()=>toast('Positive copied!'));});
  document.getElementById('copyNegBtn').addEventListener('click',()=>{const n=getFinalNeg();if(n)navigator.clipboard.writeText(n).then(()=>toast('Negative copied!'));});

  /* Reset */
  document.getElementById('resetBtn').addEventListener('click',()=>resetAll());

  /* Clear section */
  document.querySelectorAll('.sec-clr[data-k]').forEach(b=>b.addEventListener('click',()=>{
    const k=b.dataset.k; S[k]=null;
    (b.closest('.sec')||b.parentElement).querySelectorAll('.ob,.cw').forEach(x=>x.classList.remove('on'));
    // Also clear .cb color swatches (sockColor, shoeColor)
    (b.closest('.sec')||b.parentElement).querySelectorAll('.cb').forEach(x=>{x.classList.remove('on');x.style.borderColor='transparent';});
    if(k==='skin') document.querySelectorAll('.sb').forEach((x,i)=>{x.classList.remove('on');x.style.borderColor=SKINS[i].bg;});
    rebuild();
  }));
  document.querySelectorAll('.sec-clr[data-arr]').forEach(b=>b.addEventListener('click',()=>{
    const k=b.dataset.arr; if(Array.isArray(S[k])) S[k]=[];
    (b.closest('.sec')||b.parentElement).querySelectorAll('.ob').forEach(x=>x.classList.remove('on'));
    rebuild();
  }));
  // Shared clear button for Tops + Bottoms
  const clrTB = document.getElementById('clrTopBottom');
  if(clrTB) clrTB.addEventListener('click',()=>{
    S.clothingTop=null; S.clothingBottom=null; S.nsfwTop=null; S.nsfwBottom=null;
    document.getElementById('clothingTopGrid').querySelectorAll('.ob').forEach(b=>b.classList.remove('on'));
    document.getElementById('clothingBottomGrid').querySelectorAll('.ob').forEach(b=>b.classList.remove('on'));
    document.getElementById('nsfwTopGrid').querySelectorAll('.ob').forEach(b=>b.classList.remove('on'));
    document.getElementById('nsfwBottomGrid').querySelectorAll('.ob').forEach(b=>b.classList.remove('on'));
    rebuild();
  });

  /* Tag inputs */
  setupTagInput('posTagInput','posTagBox','pos');
  setupTagInput('negTagInput','negTagBox','neg');

  /* Random / Built-in Presets */
  document.getElementById('randomBtn').addEventListener('click',randomize);
}

function setupTagInput(inputId,boxId,type){
  const inp=document.getElementById(inputId);
  inp.addEventListener('keydown',e=>{
    if((e.key==='Enter'||e.key==='Tab')&&inp.value.trim()){
      e.preventDefault();
      inp.value.split(',').map(t=>t.trim()).filter(Boolean).forEach(t=>{
        const arr=type==='pos'?S.extraPos:S.extraNeg;
        if(!arr.includes(t)) arr.push(t);
      });
      inp.value='';
      renderTagBoxes();rebuild();
    }
    if(e.key==='Backspace'&&inp.value===''){
      const arr=type==='pos'?S.extraPos:S.extraNeg;
      if(arr.length){arr.pop();renderTagBoxes();rebuild();}
    }
  });
  document.getElementById(boxId).addEventListener('click',()=>inp.focus());
}

/* ═══════════════════════════════════
   TAG BOXES
═══════════════════════════════════ */
function renderTagBoxes(){
  _renderTags('posTagBox','posTagInput',S.extraPos,'pos');
  _renderTags('negTagBox','negTagInput',S.extraNeg,'neg');
}
function _renderTags(boxId,inputId,arr,type){
  const box=document.getElementById(boxId);
  const inp=document.getElementById(inputId);
  box.querySelectorAll('.tag-item').forEach(x=>x.remove());
  arr.forEach((t,i)=>{
    const el=document.createElement('div');
    el.className='tag-item'+(type==='neg'?' neg-tag':'');
    el.innerHTML=`${t}<button onclick="removeTag('${type}',${i})">×</button>`;
    box.insertBefore(el,inp);
  });
}
function removeTag(type,i){
  if(type==='pos')S.extraPos.splice(i,1); else S.extraNeg.splice(i,1);
  renderTagBoxes();rebuild();
}

/* ═══════════════════════════════════
   PROMPT BUILD
═══════════════════════════════════ */
function buildPosText(){
  const p=[];
  // FIX 9: Quality ALWAYS first
  if(S.quality.length)p.push(S.quality.join(', '));
  const _ct=buildCharCountText(); if(_ct)p.push(_ct); else if(S.charCount)p.push(S.charCount);
  if(S.age)p.push(S.age);
  if(S.body)p.push(S.body);
  if(S.skin)p.push(S.skin);
  if(S.nsfw&&S.nsfwBody.length)p.push(S.nsfwBody.join(', '));
  if(S.eyeShape&&S.eyeColor)p.push(`${S.eyeShape}, ${S.eyeColor} eyes`);
  else if(S.eyeShape)p.push(`${S.eyeShape} eyes`);
  else if(S.eyeColor)p.push(`${S.eyeColor} eyes`);
  // Fix 3+4: hair color + style combined, no duplication
  if(S.hairColor1&&S.hairColor2&&S.hairstyle)p.push(`${S.hairColor1} to ${S.hairColor2} ombre ${S.hairstyle} hair`);
  else if(S.hairColor1&&S.hairstyle)p.push(`${S.hairColor1} ${S.hairstyle} hair`);
  else if(S.hairColor2&&S.hairstyle)p.push(`${S.hairColor2} ombre ${S.hairstyle} hair`);
  else if(S.hairColor1&&S.hairColor2)p.push(`${S.hairColor1} to ${S.hairColor2} ombre hair`);
  else if(S.hairColor1)p.push(`${S.hairColor1} hair`);
  else if(S.hairstyle)p.push(`${S.hairstyle} hair`);
  // Build outfit: Top+Bottom combo OR Full Outfit — never mix both
  const wearParts=[];
  if(S.clothing) wearParts.push(S.clothingColor ? `${S.clothingColor} ${S.clothing}` : S.clothing);
  else {
    if(S.clothingTop)    wearParts.push(S.clothingTopColor    ? `${S.clothingTopColor} ${S.clothingTop}`       : S.clothingTop);
    if(S.clothingBottom) wearParts.push(S.clothingBottomColor ? `${S.clothingBottomColor} ${S.clothingBottom}` : S.clothingBottom);
  }
  if(S.nsfw){
    if(S.nsfwTop)     wearParts.push(S.nsfwTopColor      ? `${S.nsfwTopColor} ${S.nsfwTop}`           : S.nsfwTop);
    if(S.nsfwBottom)  wearParts.push(S.nsfwBottomColor   ? `${S.nsfwBottomColor} ${S.nsfwBottom}`     : S.nsfwBottom);
    S.nsfwClothing.forEach(c => wearParts.push(S.nsfwClothingColor ? `${S.nsfwClothingColor} ${c}` : c));
  }
  if(wearParts.length)p.push('wearing '+wearParts.join(', '));
  if(S.clothingCondition.length)p.push(S.clothingCondition.map(c=>c+' clothes').join(', '));
  if(S.clothingAcc.length)p.push(S.clothingAcc.join(', '));
  if(S.nsfw&&S.bodyParts.length)p.push(S.bodyParts.join(', '));
  if(S.sockColor&&S.sockLength)p.push(`${S.sockColor} ${S.sockLength} socks`);
  else if(S.sockLength)p.push(`${S.sockLength} socks`);
  if(S.shoes)p.push(S.shoeColor ? `${S.shoeColor} ${S.shoes}` : S.shoes);
  if(S.faceAcc.length)p.push(S.faceAcc.join(', '));
  if(S.expression)p.push(`${S.expression} expression`);
  const poses=[...S.poses,...(S.nsfw?S.nsfwPose:[])];
  if(poses.length)p.push(poses.join(', '));
  if(S.effects.length)p.push(S.effects.join(', '));
  const fluids=[...S.liquids,...(S.nsfw?S.nsfwFluid:[])];
  if(fluids.length)p.push(fluids.join(', '));
  const items=[...S.weapons,...S.props,...S.electronics,...S.otherItems];
  if(items.length)p.push('holding '+items.join(', '));
  if(S.nsfw&&S.nsfwIndicator.length)p.push(S.nsfwIndicator.join(', '));
  const envs=[...(S.environment?[`in ${S.environment}`]:[]),...(S.nsfw?S.nsfwEnv.map(e=>`in ${e}`):[])];
  if(envs.length)p.push(envs.join(', '));
  if(S.era)p.push(`${S.era} style`);
  if(S.style)p.push(S.style);
  if(S.animeStudio)p.push(S.animeStudio);
  if(S.colorGrade)p.push(S.colorGrade);
  if(S.stroke)p.push(S.stroke);
  if(S.shadow)p.push(S.shadow);
  if(S.lights.length)p.push(S.lights.join(', '));
  if(S.glow&&S.glow!=='no glow')p.push(S.glow);
  if(S.smooth)p.push(S.smooth);
  if(S.angle)p.push(S.angle);
  if(S.shot)p.push(S.shot);
  if(S.nsfw&&S.nsfwShot.length)p.push(S.nsfwShot.join(', '));
  if(S.look)p.push(`looking ${S.look}`);
  if(S.lens)p.push(`${S.lens} lens`);
  if(S.lensEffect&&S.lensEffect.toLowerCase()!=='none')p.push(S.lensEffect);
  return p.join(', ').replace(/,\s*$/,'');
}

function buildNegText(){
  const all=[...S.negatives,...S.negBody,...S.negQuality];
  if(!all.length) return '';
  return 'low quality, blurry, bad anatomy, watermark, '+all.join(', ');
}

/* Apply weights to a comma-separated tag string */
function applyWeights(text){
  if(!text||!Object.keys(S.weights).length) return text;
  return text.split(', ').map(tag=>{
    const key = tag.trim().toLowerCase();
    const w = S.weights[key];
    if(!w || w === 1.0) return tag;
    return `(${tag}:${w.toFixed(1)})`;
  }).join(', ');
}

function getFinalPos(){
  const auto = buildPosText();
  if(!auto&&!S.extraPos.length) return '';
  const all = [auto, ...S.extraPos].filter(Boolean).join(', ');
  return applyWeights(all);
}
function getFinalNeg(){
  const auto=buildNegText();
  const base='low quality, blurry, bad anatomy, watermark';
  if(!auto&&!S.extraNeg.length) return base;
  const parts=[];
  if(!auto) parts.push(base); else parts.push(auto);
  if(S.extraNeg.length) parts.push(S.extraNeg.join(', '));
  return applyWeights(parts.join(', '));
}

/* Build colored chip groups for visual display */
function buildPosGroups(){
  const G=[];
  function add(cls,items){const f=items.filter(Boolean);if(f.length)G.push({cls,items:f});}
  // Quality
  if(S.quality.length) add('q',[S.quality.join(', ')]);
  // Character
  const ch=[];
  const _ct2=buildCharCountText();
  if(_ct2) ch.push(_ct2); else if(S.charCount) ch.push(S.charCount);
  if(S.age) ch.push(S.age);
  if(S.body) ch.push(S.body);
  if(S.skin) ch.push(S.skin);
  if(S.nsfw&&S.nsfwBody.length) ch.push(...S.nsfwBody);
  if(ch.length) add('c',ch);
  // Look
  const lk=[];
  if(S.eyeShape&&S.eyeColor) lk.push(S.eyeShape+', '+S.eyeColor+' eyes');
  else if(S.eyeShape) lk.push(S.eyeShape+' eyes');
  else if(S.eyeColor) lk.push(S.eyeColor+' eyes');
  if(S.hairColor1&&S.hairColor2&&S.hairstyle) lk.push(S.hairColor1+' to '+S.hairColor2+' ombre '+S.hairstyle+' hair');
  else if(S.hairColor1&&S.hairstyle) lk.push(S.hairColor1+' '+S.hairstyle+' hair');
  else if(S.hairColor2&&S.hairstyle) lk.push(S.hairColor2+' ombre '+S.hairstyle+' hair');
  else if(S.hairColor1&&S.hairColor2) lk.push(S.hairColor1+' to '+S.hairColor2+' ombre hair');
  else if(S.hairColor1) lk.push(S.hairColor1+' hair');
  else if(S.hairstyle) lk.push(S.hairstyle+' hair');
  if(lk.length) add('l',lk);
  // Outfit
  const ot=[];
  const wearG=[];
  if(S.clothing) wearG.push(S.clothing);
  else { if(S.clothingTop) wearG.push(S.clothingTop); if(S.clothingBottom) wearG.push(S.clothingBottom); }
  if(S.nsfw){ if(S.nsfwTop) wearG.push(S.nsfwTop); if(S.nsfwBottom) wearG.push(S.nsfwBottom); wearG.push(...S.nsfwClothing); }
  if(wearG.length) ot.push('wearing '+wearG.join(', '));
  if(S.clothingAcc.length) ot.push(S.clothingAcc.join(', '));
  if(S.nsfw&&S.bodyParts.length) ot.push(...S.bodyParts);
  if(S.sockColor&&S.sockLength) ot.push(S.sockColor+' '+S.sockLength+' socks');
  else if(S.sockLength) ot.push(S.sockLength+' socks');
  if(S.shoes) ot.push(S.shoeColor ? `${S.shoeColor} ${S.shoes}` : S.shoes);
  if(S.faceAcc.length) ot.push(S.faceAcc.join(', '));
  if(ot.length) add('o',ot);
  // Mood
  const md=[];
  if(S.expression) md.push(S.expression+' expression');
  const poses=[...S.poses,...(S.nsfw?S.nsfwPose:[])];
  if(poses.length) md.push(poses.join(', '));
  if(S.effects.length) md.push(S.effects.join(', '));
  const fluids=[...S.liquids,...(S.nsfw?S.nsfwFluid:[])];
  if(fluids.length) md.push(fluids.join(', '));
  const items=[...S.weapons,...S.props,...S.electronics,...S.otherItems];
  if(items.length) md.push('holding '+items.join(', '));
  if(S.nsfw&&S.nsfwIndicator.length) md.push(...S.nsfwIndicator);
  if(md.length) add('m',md);
  // Scene
  const sc=[];
  const envs=[...(S.environment?['in '+S.environment]:[]),...(S.nsfw?S.nsfwEnv.map(e=>'in '+e):[])];
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
  // Camera
  const cm=[];
  if(S.angle) cm.push(S.angle);
  if(S.shot) cm.push(S.shot);
  if(S.nsfw&&S.nsfwShot.length) cm.push(...S.nsfwShot);
  if(S.look) cm.push('looking '+S.look);
  if(S.lens) cm.push(S.lens+' lens');
  if(S.lensEffect&&S.lensEffect.toLowerCase()!=='none') cm.push(S.lensEffect);
  if(cm.length) add('cam',cm);
  return G;
}

/* ── Weight Slider ── */
let activeTip = null;

function closeWeightTip(){
  if(activeTip){ activeTip.remove(); activeTip=null; }
  document.querySelectorAll('.ps.w-open').forEach(x=>x.classList.remove('w-open'));
}

function showWeightSlider(chip, key, label){
  // Toggle off if already open on this chip
  if(activeTip && activeTip._key === key){ closeWeightTip(); return; }
  closeWeightTip();

  const tip = document.createElement('div');
  tip.className = 'w-slider-tip';
  tip._key = key;
  activeTip = tip;
  chip.classList.add('w-open');

  // Tag label
  const tagLbl = document.createElement('div');
  tagLbl.className = 'w-tip-tag';
  tagLbl.textContent = '⚖ ' + label;
  tip.appendChild(tagLbl);

  // Slider row
  const row = document.createElement('div');
  row.className = 'w-tip-row';

  const valLbl = document.createElement('div');
  valLbl.className = 'w-tip-val';
  const curW = S.weights[key] || 1.0;
  valLbl.textContent = curW.toFixed(1);

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.className = 'w-tip-slider';
  slider.min = '0.1'; slider.max = '2.0'; slider.step = '0.1';
  slider.value = curW;

  function updatePct(){
    const pct = ((slider.value - 0.1) / (2.0 - 0.1)) * 100;
    slider.style.setProperty('--pct', pct.toFixed(1) + '%');
  }
  updatePct();

  function applyVal(v){
    const val = Math.round(v * 10) / 10;
    S.weights[key] = val;
    valLbl.textContent = val.toFixed(1);
    slider.value = val;
    updatePct();
    // Update badge on chip
    const badge = chip.querySelector('.ps-wbadge');
    if(badge){
      badge.textContent = val.toFixed(1);
      badge.className = 'ps-wbadge' + (val > 1 ? ' hi' : val < 1 ? ' lo' : '');
      badge.style.display = val === 1.0 ? 'none' : '';
    }
    // Update preset buttons
    tip.querySelectorAll('.w-tip-pre').forEach(b=>{
      b.classList.toggle('on', parseFloat(b.dataset.v) === val);
    });
    rebuild();
  }

  slider.addEventListener('input', ()=> applyVal(parseFloat(slider.value)));
  row.appendChild(valLbl);
  row.appendChild(slider);
  tip.appendChild(row);

  // Reset button
  const reset = document.createElement('button');
  reset.className = 'w-tip-reset';
  reset.textContent = '✕ Reset to 1.0';
  reset.addEventListener('click', e=>{
    e.stopPropagation();
    delete S.weights[key];
    closeWeightTip();
    rebuild();
  });
  tip.appendChild(reset);

  document.body.appendChild(tip);

  // Position below chip
  const rect = chip.getBoundingClientRect();
  const tipW = 198;
  let left = rect.left;
  let top  = rect.bottom + 6;
  if(left + tipW > window.innerWidth - 8) left = window.innerWidth - tipW - 8;
  if(top + 170 > window.innerHeight) top = rect.top - 170;
  tip.style.left = left + 'px';
  tip.style.top  = top  + 'px';

  // Close on outside click
  setTimeout(()=>{
    document.addEventListener('click', function handler(e){
      if(!tip.contains(e.target) && e.target !== chip){
        closeWeightTip();
        document.removeEventListener('click', handler);
      }
    });
  }, 10);
}

function makeWeightedChip(text, cls){
  const key = text.toLowerCase();
  const w   = S.weights[key] || 1.0;

  const sp = document.createElement('span');
  sp.className = 'ps ' + cls;
  sp.dataset.wkey = key;

  const lbl = document.createElement('span');
  lbl.className = 'ps-txt';
  lbl.textContent = text;
  sp.appendChild(lbl);

  const badge = document.createElement('span');
  badge.className = 'ps-wbadge' + (w > 1 ? ' hi' : w < 1 ? ' lo' : '');
  badge.textContent = w.toFixed(1);
  badge.style.display = w === 1.0 ? 'none' : '';
  sp.appendChild(badge);

  sp.addEventListener('click', e=>{
    e.stopPropagation();
    showWeightSlider(sp, key, text);
  });

  return sp;
}

function renderPromptChips(el, groups, extraArr, negCls){
  el.innerHTML='';
  if(!groups.length&&!extraArr.length){
    el.className='ptxt'+(negCls?' neg':'')+' empty';
    el.textContent=negCls?(typeof t==='function'?t('neg_empty'):'Select avoids above, or add in the box below…'):(typeof t==='function'?t('prompt_empty'):'Start selecting options on the left…');
    return;
  }
  el.className='ptxt'+(negCls?' neg':'');
  groups.forEach(g=>{
    g.items.forEach(item=>{
      el.appendChild(makeWeightedChip(item, 'ps-'+(negCls?'n':g.cls)));
    });
  });
  extraArr.forEach(t=>{
    el.appendChild(makeWeightedChip(t, negCls?'ps-n':'ps-usr'));
  });
}

function rebuild(){
  // Auto-fix conflicts — resolveConflicts handles UI sync for affected buttons only
  resolveConflicts();

  const pos=buildPosText();
  const pe=document.getElementById('promptText');
  const ne=document.getElementById('negativeText');

  // Positive — colored chips
  const groups=buildPosGroups();
  renderPromptChips(pe,groups,S.extraPos,false);
  if(!pos&&!S.extraPos.length){
    document.getElementById('posWC').textContent='';
  } else {
    pe.classList.add('flash');
    setTimeout(()=>pe.classList.remove('flash'),500);
    document.getElementById('posWC').textContent=(pos.split(',').length+S.extraPos.length)+' '+(typeof t==='function'?t('tags'):'tags');
  }

  // Negative
  const hasNeg=S.negatives.length>0||S.negBody.length>0||S.negQuality.length>0||S.extraNeg.length>0;
  if(hasNeg){
    const negItems=[...S.negatives,...S.negBody,...S.negQuality].map(n=>({cls:'n',items:[n]}));
    renderPromptChips(ne,negItems,S.extraNeg,true);
    ne.classList.add('flash');
    setTimeout(()=>ne.classList.remove('flash'),500);
    document.getElementById('negWC').textContent=(S.negatives.length+S.negBody.length+S.negQuality.length+S.extraNeg.length)+' '+(typeof t==='function'?t('tags'):'tags');
  } else {
    ne.className='ptxt neg empty';
    ne.textContent = (typeof t==='function') ? t('neg_empty') : 'Select avoids above, or add in the box below…';
    document.getElementById('negWC').textContent='';
  }

  updateBlueprint();
  if(window.updateBlueprintDisplay) window.updateBlueprintDisplay();
  updateCounter();
}

/* ═══════════════════════════════════
   BLUEPRINT UPDATE
═══════════════════════════════════ */
function updateBlueprint(){
  let n=0;
  BP_CELLS.forEach(cell=>{
    const el=document.getElementById(cell.id);if(!el)return;
    const active=cell.keys.some(k=>{
      if(k==='characters') return S.characters.some(Boolean);
      return Array.isArray(S[k])?S[k].length>0:!!S[k];
    });
    const was=el.classList.contains('on');
    el.classList.toggle('on',active);
    const valEl=el.querySelector('.bp-val');
    if(active){
      n++;
      if(valEl){
        const fk=cell.keys.find(k=>Array.isArray(S[k])?S[k].length>0:!!S[k]);
        const raw=fk?(Array.isArray(S[fk])?S[fk][0]:S[fk]):'';
        valEl.textContent=(raw||'✓').replace(/,.*/,'').substring(0,13);
      }
      if(!was){el.classList.add('pop');setTimeout(()=>el.classList.remove('pop'),280);}
    } else {
      if(valEl)valEl.textContent='—';
    }
  });
  const pct=Math.round(n/BP_CELLS.length*100);
  const fill=document.getElementById('bpFill');if(fill)fill.style.width=pct+'%';
  const lbl=document.getElementById('bpPct');if(lbl)lbl.textContent=pct+'%';
}
/* ═══════════════════════════════════
   COUNTER
═══════════════════════════════════ */
function buildCounterDots(){} // legacy stub — replaced by PSM

function analyzePrompt(){
  const issues = [];
  let score = 0;

  /* ── SCORING: points for coverage ── */
  // Core character (30pts)
  if(S.age || S.charCount || S.characters.some(Boolean)) score += 5;
  if(S.skin || S.body)          score += 5;
  if(S.hairColor1 || S.hairstyle) score += 7;
  if(S.eyeColor  || S.eyeShape)   score += 5;
  if(S.clothing || S.clothingTop || S.clothingBottom || S.nsfwClothing.length) score += 8;

  // Style (25pts)
  if(S.style || S.animeStudio)  score += 10;
  if(S.era)                     score += 5;
  if(S.colorGrade)               score += 5;
  if(S.stroke)                  score += 5;

  // Scene / Camera (20pts)
  if(S.environment)             score += 7;
  if(S.shot)                    score += 6;
  if(S.angle)                   score += 4;
  if(S.look)                    score += 3;

  // Lighting / Quality (25pts)
  if(S.quality.length >= 2)     score += 10;
  else if(S.quality.length === 1) score += 5;
  if(S.lights.length)           score += 10;
  if(S.glow && S.glow !== 'no glow') score += 3;
  if(S.shadow && S.shadow !== 'no shadows') score += 2;

  // Mood / Expression bonus (up to 5 extra)
  if(S.expression)  score = Math.min(100, score + 3);
  if(S.poses.length) score = Math.min(100, score + 2);

  score = Math.min(100, score);

  /* ── CONFLICTS: opposing choices ── */
  // Shadow conflicts
  if(S.shadow === 'no shadows' &&
     S.lights.some(x=>['rim light','backlight','neon light','moonlight','candlelight'].includes(x)))
    issues.push({type:'conflict', icon:'fa-circle-xmark', msg:'"No Shadows" contradicts dramatic lighting'});

  // Glow conflicts with B&W
  if(S.glow && S.glow !== 'no glow' && S.colorGrade === 'black & white')
    issues.push({type:'conflict', icon:'fa-circle-xmark', msg:'Colored glow conflicts with Black & White palette'});

  // Style + Chibi + dramatic camera
  if(S.style === 'chibi' && S.shot === 'extreme closeup')
    issues.push({type:'conflict', icon:'fa-circle-xmark', msg:'Chibi style + Extreme Closeup can distort proportions'});

  /* ── OVERLOAD: too many of the same category ── */
  const totalStyles = (S.style?1:0) + (S.animeStudio?1:0) + (S.era?1:0);
  if(totalStyles >= 3)
    issues.push({type:'overload', icon:'fa-triangle-exclamation', msg:'3 style modifiers at once may confuse the model'});

  if(S.lights.length >= 4)
    issues.push({type:'overload', icon:'fa-triangle-exclamation', msg:`${S.lights.length} lighting types — 1-2 is usually enough`});

  if(S.effects.length >= 4)
    issues.push({type:'overload', icon:'fa-triangle-exclamation', msg:`${S.effects.length} effects — may overwhelm composition`});

  if(S.quality.length >= 6)
    issues.push({type:'overload', icon:'fa-triangle-exclamation', msg:'Too many quality tags — 3-4 is optimal'});

  const totalActions = S.poses.length + S.effects.length + S.liquids.length;
  if(totalActions >= 6)
    issues.push({type:'overload', icon:'fa-triangle-exclamation', msg:'Many pose/effect/liquid tags — model may struggle to combine them'});

  /* ── MISSING: important gaps ── */
  if(!S.quality.length)
    issues.push({type:'missing', icon:'fa-circle-info', msg:'No quality tags — add Masterpiece, Best Quality etc.'});

  if(!S.lights.length && !S.glow)
    issues.push({type:'missing', icon:'fa-circle-info', msg:'No lighting — strongly affects image mood'});

  if(!S.style && !S.animeStudio)
    issues.push({type:'missing', icon:'fa-circle-info', msg:'No art style or studio — model uses default'});

  if(!S.shot && !S.angle)
    issues.push({type:'missing', icon:'fa-circle-info', msg:'No camera set — add Shot Range or Angle'});

  /* ── RENDER ── */
  const fillEl  = document.getElementById('psmFill');
  const scoreEl = document.getElementById('psmScore');
  const gradeEl = document.getElementById('psmGrade');
  const issuesEl= document.getElementById('psmIssues');
  if(!fillEl) return;

  // Penalize score for conflicts/overloads
  const conflicts = issues.filter(x=>x.type==='conflict').length;
  const overloads = issues.filter(x=>x.type==='overload').length;
  const penalized = Math.max(0, score - conflicts*12 - overloads*5);

  fillEl.style.width = penalized + '%';

  // Color bar by score
  if(penalized >= 85)      fillEl.style.background='linear-gradient(90deg,#6366f1,#a855f7)';
  else if(penalized >= 65) fillEl.style.background='linear-gradient(90deg,#22c55e,#4ade80)';
  else if(penalized >= 45) fillEl.style.background='linear-gradient(90deg,#eab308,#fbbf24)';
  else if(penalized >= 25) fillEl.style.background='linear-gradient(90deg,#f97316,#fb923c)';
  else                     fillEl.style.background='linear-gradient(90deg,#ef4444,#f87171)';

  scoreEl.textContent = penalized;

  const grades = [
    [85,'g-pro',  '✦ Pro'],
    [65,'g-strong','Strong'],
    [45,'g-good',  'Good'],
    [25,'g-fair',  'Fair'],
    [0, 'g-weak',  'Weak'],
  ];
  const [,gcls,gtxt] = grades.find(([min])=>penalized>=min);
  gradeEl.className = 'psm-grade ' + gcls;
  gradeEl.textContent = gtxt;

  // Render issues (max 3 shown — most critical first)
  issuesEl.innerHTML = '';
  const priority = ['conflict','overload','missing'];
  const sorted = [...issues].sort((a,b)=>priority.indexOf(a.type)-priority.indexOf(b.type));
  sorted.slice(0,3).forEach(iss=>{
    const row = document.createElement('div');
    row.className = 'psm-issue ' + iss.type;
    row.innerHTML = `<i class="fas ${iss.icon}"></i><span>${iss.msg}</span>`;
    issuesEl.appendChild(row);
  });
}

function updateCounter(){ analyzePrompt(); } // keep old call sites working

/* ═══════════════════════════════════
   FAVOURITES & PRESETS
═══════════════════════════════════ */
function renderFavList(){
  const list=document.getElementById('favList');
  list.innerHTML='';
  if(!S.favourites.length){list.innerHTML='<div class="fav-empty" data-i18n="fav_empty">No saved favourites yet</div>';return;}
  S.favourites.forEach((f,i)=>{
    const item=document.createElement('div');
    item.className='fav-item';
    item.innerHTML=`
      <div class="fav-item-top">
        <span class="fav-item-name">⭐ ${f.name}</span>
        <span class="fav-item-date">${f.date}</span>
        <span class="fav-item-del" title="Delete">✕</span>
      </div>
      <div class="fav-item-pos">${f.pos}</div>
    `;
    item.addEventListener('click',e=>{
      if(e.target.classList.contains('fav-item-del'))return;
      // Load into prompt display
      const pe=document.getElementById('promptText');
      const ne=document.getElementById('negativeText');
      pe.className='ptxt'; pe.textContent=f.pos;
      if(f.neg){ne.className='ptxt neg';ne.textContent=f.neg;}
      document.getElementById('posWC').textContent=f.pos.split(',').length+' tags';
      document.getElementById('favDropdown').classList.remove('open');
      toast('Loaded: '+f.name+' 📋');
    });
    item.querySelector('.fav-item-del').addEventListener('click',(e)=>{
      e.stopPropagation();
      const docId = S.favourites[i]?._docId;
      S.favourites.splice(i,1);
      localStorage.setItem('aps6Favs',JSON.stringify(S.favourites));
      renderFavList();
      const u = window._currentUser;
      if(u && docId && window._fbFavs){
        window._fbFavs.del(u.uid, docId).catch(console.warn);
      }
    });
    list.appendChild(item);
  });
}



/* Reflect loaded state back onto buttons */
function reflectUI(){
  // Single-select buttons
  document.querySelectorAll('.ob').forEach(b=>{
    const grid=b.closest('[id]');
    b.classList.remove('on');
  });
  document.querySelectorAll('.cw,.cb').forEach(w=>{w.classList.remove('on');if(w.classList.contains('cb'))w.style.borderColor='transparent';});
  document.querySelectorAll('.sb').forEach((b,i)=>{b.classList.remove('on');if(SKINS[i])b.style.borderColor=SKINS[i].bg;});

  // Re-apply state visually
  // For single-select: find the button in each grid whose text matches state value
  const singleMap={
    charCountGrid:'charCount', ageGrid:'age', bodyGrid:'body',
    hairstyleGrid:'hairstyle', eyeShapeGrid:'eyeShape',
    clothingTopGrid:'clothingTop', clothingBottomGrid:'clothingBottom',
    nsfwTopGrid:'nsfwTop', nsfwBottomGrid:'nsfwBottom',
    clothingGrid:'clothing', sockLengthGrid:'sockLength',
    shoesGrid:'shoes', expressionGrid:'expression',
    envGrid:'environment', styleGrid:'style', eraGrid:'era', animeStudioGrid:'animeStudio',
    strokeGrid:'stroke', shadowGrid:'shadow', glowGrid:'glow', smoothGrid:'smooth',
    angleGrid:'angle', shotGrid:'shot', lookGrid:'look', lensGrid:'lens', lensEffectGrid:'lensEffect',
    colorGradeGrid:'colorGrade'
  };
  Object.entries(singleMap).forEach(([gid,k])=>{
    if(!S[k])return;
    const g=document.getElementById(gid);if(!g)return;
    g.querySelectorAll('.ob').forEach(b=>{
      if(b.querySelector('span')&&b.querySelector('span').textContent.toLowerCase()===S[k]) b.classList.add('on');
    });
  });
  // Multi-select
  const multiMap={
    clothingAccGrid:'clothingAcc', clothingConditionGrid:'clothingCondition',
    faceAccGrid:'faceAcc', poseGrid:'poses',
    effectsGrid:'effects', liquidsGrid:'liquids', weaponGrid:'weapons',
    propsGrid:'props', electronicsGrid:'electronics', otherItemsGrid:'otherItems',
    qualityGrid:'quality', lightGrid:'lights', negativeGrid:'negatives',
    nsfwBodyGrid:'nsfwBody',
    nsfwClothingGrid:'nsfwClothing', nsfwPoseGrid:'nsfwPose',
    nsfwFluidGrid:'nsfwFluid', nsfwEnvGrid:'nsfwEnv', nsfwIndicatorGrid:'nsfwIndicator',
    nsfwShotGrid:'nsfwShot', bodyPartsGrid:'bodyParts'
  };
  Object.entries(multiMap).forEach(([gid,k])=>{
    const g=document.getElementById(gid);if(!g)return;
    g.querySelectorAll('.ob').forEach(b=>{
      const txt=b.querySelector('span')&&b.querySelector('span').textContent.toLowerCase();
      if(S[k]&&S[k].includes(txt)) b.classList.add('on');
    });
  });
  // Color pickers — now using .cb buttons (renderColors)
  [{gid:'hairColorGrid',sk:'hairColor1',arr:HAIR_COLORS},
   {gid:'hairColor2Grid',sk:'hairColor2',arr:HAIR_COLORS},
   {gid:'eyeColorGrid',sk:'eyeColor',arr:EYE_COLORS}
  ].forEach(({gid,sk,arr})=>{
    const g=document.getElementById(gid);if(!g||!S[sk])return;
    g.querySelectorAll('.cb').forEach((b,i)=>{
      if(!arr[i])return;
      const on=arr[i].id===S[sk];
      b.classList.toggle('on',on);
      b.style.borderColor=on?'rgba(255,255,255,.85)':'transparent';
    });
  });
  // Update color dots on sock/shoe buttons
  _updateColorDot('sockColor');
  _updateColorDot('shoeColor');
  _updateColorDot('clothingColor');
  _updateColorDot('clothingTopColor');
  _updateColorDot('clothingBottomColor');
  _updateColorDot('nsfwTopColor');
  _updateColorDot('nsfwBottomColor');
  _updateColorDot('nsfwClothingColor');
  // Skin
  document.querySelectorAll('.sb').forEach((b,i)=>{
    if(S.skin&&S.skin===SKINS[i].val){b.classList.add('on');b.style.borderColor='white';}
  });
  // NSFW
  document.getElementById('nsfwBtn').classList.toggle('on',S.nsfw);
  toggleNSFW(S.nsfw);
}

/* ═══════════════════════════════════
   MODAL
═══════════════════════════════════ */
let _modalCb=null;
function openModal(title,sub,defaultVal,cb){
  _modalCb=cb;
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalSub').textContent=sub;
  document.getElementById('modalInput').value=defaultVal||'';
  document.getElementById('modalOverlay').classList.add('open');
  setTimeout(()=>document.getElementById('modalInput').focus(),100);
}
document.addEventListener('DOMContentLoaded',()=>{},false);
function initModal(){
  document.getElementById('modalOk').addEventListener('click',()=>{
    const v=document.getElementById('modalInput').value.trim();
    document.getElementById('modalOverlay').classList.remove('open');
    if(_modalCb) _modalCb(v);
  });
  document.getElementById('modalCancel').addEventListener('click',()=>document.getElementById('modalOverlay').classList.remove('open'));
  document.getElementById('modalOverlay').addEventListener('click',e=>{if(e.target===document.getElementById('modalOverlay'))document.getElementById('modalOverlay').classList.remove('open');});
  document.getElementById('modalInput').addEventListener('keydown',e=>{
    if(e.key==='Enter'){document.getElementById('modalOk').click();}
    if(e.key==='Escape'){document.getElementById('modalCancel').click();}
  });

  // Info tray toggle
  const infoTray = document.getElementById('infoTray');
  document.getElementById('infoMenuBtn').addEventListener('click', e=>{
    e.stopPropagation();
    infoTray.classList.toggle('open');
  });
  document.addEventListener('click', ()=> infoTray.classList.remove('open'));
  infoTray.addEventListener('click', e=> e.stopPropagation());

  // Info tray → modals
  document.getElementById('infoAbout').addEventListener('click',()=>{
    infoTray.classList.remove('open');
    document.getElementById('aboutOverlay').classList.add('open');
  });
  document.getElementById('infoFeatures').addEventListener('click',()=>{
    infoTray.classList.remove('open');
    document.getElementById('featuresOverlay').classList.add('open');
  });
  document.getElementById('infoTips').addEventListener('click',()=>{
    infoTray.classList.remove('open');
    document.getElementById('tipsOverlay').classList.add('open');
  });

  // Footer modals — close buttons and overlay click
  ['about','features','tips'].forEach(id=>{
    const overlay = document.getElementById(id+'Overlay');
    document.getElementById(id+'Close').addEventListener('click',()=>overlay.classList.remove('open'));
    overlay.addEventListener('click',e=>{ if(e.target===overlay) overlay.classList.remove('open'); });
  });

  // Close all on Escape
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      ['about','features','tips'].forEach(id=> document.getElementById(id+'Overlay').classList.remove('open'));
      infoTray.classList.remove('open');
    }
  });
}

/* ═══════════════════════════════════
   RANDOM / BUILTIN PRESETS
═══════════════════════════════════ */
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function pickN(a,n){const s=[...a];const r=[];for(let i=0;i<n&&s.length;i++){const x=Math.floor(Math.random()*s.length);r.push(s.splice(x,1)[0]);}return r;}
function maybe(prob){return Math.random()<prob;}

/* ═══════════════════════════════════
   CONFLICT RESOLVER
   Called after every selection + randomize
═══════════════════════════════════ */
function resolveConflicts(_silent=false){
  const conflicts=[];
  // cf = hard conflict → shows toast notification
  // sw = silent swap → auto-replaces without notification (natural mutual exclusion)
  const cf=(a,b)=>{ if(!_silent) conflicts.push([a,b]); };
  const sw=()=>{}; // silent — no toast, just state change + _syncGrid

  // ─── 1. CLOTHING LOGIC ───────────────────────────────────────────
  // NOTE: Full Outfit ↔ Top/Bottom mutual exclusion is handled by
  // _initClothingMutualExclusion (click handlers), NOT here.
  // resolveConflicts only handles INCOMPATIBILITY conflicts.

  const isSwimFull = S.clothing && ['swimsuit','one-piece swimsuit'].includes(S.clothing);
  const isFormalFull = S.clothing && ['formal suit','blazer & pants','little black dress','evening gown','wedding dress'].includes(S.clothing);
  const isArmorFull  = S.clothing && ['military uniform','fantasy armor','ninja outfit'].includes(S.clothing);


  // ─── 1. CLOTHING CONFLICTS ────────────────────────────────────────
  const nsfwThemed    = ['bunny suit','nurse outfit','police costume','french maid','cheerleader'];
  const nsfwSwim      = ['swimwear','bikini','micro bikini'];
  const nsfwCoverFull = ['lingerie','pasties only'];
  const swimBottomConflicts = ['jeans','skinny jeans','wide-leg jeans','ripped jeans',
    'shorts','denim shorts','mini shorts','high-waist shorts','jogger pants',
    'sweatpants','cargo pants','leggings','pleated skirt','mini skirt',
    'plaid skirt','long skirt','denim skirt'];

  // nsfwClothing = single-select across ALL groups — keep last picked, silent swap
  if(S.nsfwClothing.length > 1){
    const keep = S.nsfwClothing[S.nsfwClothing.length - 1];
    sw(); S.nsfwClothing = [keep];
    _syncGrid('nsfwClothingGrid', v => S.nsfwClothing.includes(v));
  }
  // nsfwTop/nsfwBottom are single-select — no cap needed

  // NSFW replaces SFW counterpart — silent swap (natural behaviour)
  const hasThemedNsfw = S.nsfwClothing.some(x => nsfwThemed.includes(x));
  const hasSwimNsfw   = S.nsfwClothing.some(x => nsfwSwim.includes(x));
  const hasCoverNsfw  = S.nsfwClothing.some(x => nsfwCoverFull.includes(x));

  if(S.nsfwTop && S.clothingTop){
    sw(); S.clothingTop = null;
    _syncGrid('clothingTopGrid', () => false);
  }
  if(S.nsfwBottom && S.clothingBottom){
    sw(); S.clothingBottom = null;
    _syncGrid('clothingBottomGrid', () => false);
  }
  if(hasSwimNsfw && S.clothingBottom && swimBottomConflicts.includes(S.clothingBottom)){
    sw(); S.clothingBottom = null;
    _syncGrid('clothingBottomGrid', () => false);
  }
  if(hasThemedNsfw && S.clothing){
    const sfwFullConflict = ['school uniform','sailor uniform','magical girl','maid outfit',
      'gothic lolita','idol outfit','fantasy armor','ninja outfit','military uniform',
      'formal suit','blazer & pants','little black dress','evening gown','wedding dress'];
    if(sfwFullConflict.includes(S.clothing)){
      cf(S.clothing, S.nsfwClothing.find(x=>nsfwThemed.includes(x)));
      S.nsfwClothing = S.nsfwClothing.filter(x => !nsfwThemed.includes(x));
      _syncGrid('nsfwClothingGrid', v => S.nsfwClothing.includes(v));
    }
  }
  if(isArmorFull){
    const bad = S.nsfwClothing.filter(x=>['bikini','micro bikini','lingerie','pasties only'].includes(x));
    if(bad.length){
      cf(S.clothing, bad[0]);
      S.nsfwClothing = S.nsfwClothing.filter(x=>!['bikini','micro bikini','lingerie','pasties only'].includes(x));
      _syncGrid('nsfwClothingGrid', v => S.nsfwClothing.includes(v));
    }
  }
  if(isFormalFull){
    const bad = S.nsfwClothing.filter(x=>['bikini','micro bikini','lingerie','pasties only','micro skirt'].includes(x));
    if(bad.length){
      cf(S.clothing, bad[0]);
      S.nsfwClothing = S.nsfwClothing.filter(x=>!['bikini','micro bikini','lingerie','pasties only','micro skirt'].includes(x));
      _syncGrid('nsfwClothingGrid', v => S.nsfwClothing.includes(v));
    }
  }
  if(isSwimFull && S.weapons.length){
    cf('لباس سباحة','أسلحة'); S.weapons=[];
    _syncGrid('weaponGrid', v => false);
  }

  // ─── 2. POSE LOGIC — silent swap (natural mutual exclusion) ─────
  const poseMutex=[
    ['sleeping','standing'],['sleeping','sitting'],['sleeping','crouching'],
    ['sleeping','kneeling'],['sleeping','dancing'],['sleeping','jumping'],
    ['sleeping','running'],['sleeping','floating'],['sleeping','stretching'],
    ['sleeping','fighting stance'],['sleeping','eating'],['sleeping','drinking'],
    ['sleeping','reading'],
    ['fighting stance','sitting'],['fighting stance','lying down'],
    ['fighting stance','eating'],['fighting stance','drinking'],['fighting stance','reading'],
    ['dancing','fighting stance'],['dancing','lying down'],['dancing','sitting'],
    ['dancing','eating'],['dancing','crouching'],
    ['running','sitting'],['running','lying down'],['running','eating'],['running','drinking'],
    ['eating','jumping'],['eating','fighting stance'],['eating','running'],
    ['drinking','jumping'],['drinking','fighting stance'],['drinking','running'],
    ['lying down','standing'],['lying down','jumping'],['lying down','running'],
    ['jumping','sitting'],['jumping','lying down'],['jumping','eating'],
  ];
  for(const [a,b] of poseMutex){
    if(S.poses.includes(a) && S.poses.includes(b)){
      sw();
      const ai=S.poses.indexOf(a), bi=S.poses.indexOf(b);
      S.poses.splice(Math.max(ai,bi),1);
      _syncGrid('poseGrid', v => S.poses.includes(v));
      break;
    }
  }

  const nsfwActivePoses=['on all fours','doggy style','missionary','cowgirl',
    'reverse cowgirl','oral','anal','gangbang'];
  const hasNsfwActive = S.nsfwPose.some(p=>nsfwActivePoses.includes(p));
  if(hasNsfwActive){
    const inc=['standing','running','jumping','fighting stance','dancing'];
    const removed=S.poses.filter(p=>inc.includes(p));
    if(removed.length){
      sw(); S.poses=S.poses.filter(p=>!inc.includes(p));
      _syncGrid('poseGrid', v => S.poses.includes(v));
    }
  }
  if(S.nsfwPose.includes('tied up')){
    const inc=['running','jumping','fighting stance','dancing'];
    const removed=S.poses.filter(p=>inc.includes(p));
    if(removed.length){
      sw(); S.poses=S.poses.filter(p=>!inc.includes(p));
      _syncGrid('poseGrid', v => S.poses.includes(v));
    }
  }
  if(S.nsfwPose.includes('spread legs')){
    const inc=['running','jumping'];
    const removed=S.poses.filter(p=>inc.includes(p));
    if(removed.length){
      sw(); S.poses=S.poses.filter(p=>!inc.includes(p));
      _syncGrid('poseGrid', v => S.poses.includes(v));
    }
  }

  // ─── 3. CAPS — silent trim ────────────────────────────────────────
  if(S.poses.length>2){     sw(); S.poses=S.poses.slice(0,2);           _syncGrid('poseGrid',        v=>S.poses.includes(v)); }
  if(S.weapons.length>2){   sw(); S.weapons=S.weapons.slice(0,2);       _syncGrid('weaponGrid',      v=>S.weapons.includes(v)); }
  if(S.props.length>3){     sw(); S.props=S.props.slice(0,3);           _syncGrid('propsGrid',       v=>S.props.includes(v)); }
  if(S.electronics.length>2){ sw(); S.electronics=S.electronics.slice(0,2); _syncGrid('electronicsGrid', v=>S.electronics.includes(v)); }
  if(S.lights.length>3){    sw(); S.lights=S.lights.slice(0,3);         _syncGrid('lightGrid',       v=>S.lights.includes(v)); }
  if(S.effects.length>3){   sw(); S.effects=S.effects.slice(0,3);       _syncGrid('effectsGrid',     v=>S.effects.includes(v)); }

  // ─── 4. VISUAL/LIGHTING — silent swap ────────────────────────────
  if(S.colorGrade==='black & white' && S.glow && S.glow!=='no glow'){
    sw(); S.glow=null;
    _syncGrid('glowGrid', v => false);
  }
  if(S.shadow==='no shadows'){
    const dramatic=['rim light','backlight','neon light','moonlight','candlelight'];
    const removed=S.lights.filter(x=>dramatic.includes(x));
    if(removed.length){
      sw(); S.lights=S.lights.filter(x=>!dramatic.includes(x));
      _syncGrid('lightGrid', v => S.lights.includes(v));
    }
  }
  if(S.style==='chibi' && S.shot==='extreme closeup'){
    sw(); S.shot=null;
    _syncGrid('shotGrid', v => false);
  }

  // ─── 5. SLEEP — hard conflict → toast ────────────────────────────
  if(S.poses.includes('sleeping')){
    if(S.weapons.length){ cf('نائم','أسلحة'); S.weapons=[]; _syncGrid('weaponGrid', v=>false); }
    if(S.electronics.length){ cf('نائم','إلكترونيات'); S.electronics=[]; _syncGrid('electronicsGrid', v=>false); }
  }

  // ─── SHOW TOAST ──────────────────────────────────────────────────
  if(!_silent && conflicts.length>0){
    toastConflict(conflicts[0][0], conflicts[0][1]);
  }
}

/* Sync a specific grid's buttons to match state — called only when resolveConflicts changes something */
function _syncGrid(gid, stateFn){
  const g=document.getElementById(gid);
  if(!g) return;
  g.querySelectorAll('.ob').forEach(b=>{
    const en=(b.querySelector('span')||b).getAttribute('data-en')||b.textContent;
    b.classList.toggle('on', stateFn(en.toLowerCase()));
  });
}
// Keep old name as no-op so nothing else breaks
function _syncConflictUI(){}

function randomize(){
  const wasNsfw = S.nsfw;   // preserve NSFW state
  resetAll(true);
  if(wasNsfw){ S.nsfw=true; toggleNSFW(true); }

  // ── Characters — 80% single, 15% two, 7% three (rounded from user file) ──
  let chosenChars;
  const charRoll = Math.random();
  if(charRoll < 0.80){
    // 80% single — female 80%, male 20%
    chosenChars = maybe(.80) ? ['female'] : ['male'];
  } else if(charRoll < 0.93){
    // 13% two characters
    chosenChars = pick([['female','female'],['male','male'],['female','male']]);
  } else {
    // 7% three characters
    chosenChars = pick([['female','female','female'],['male','male','male'],['female','female','male']]);
  }
  chosenChars.forEach((g,i)=>{ if(i<3) S.characters[i]=g; });
  renderCharCards(); updateCharWarn();
  S.charCount = null;

  // ── Character Appearance ──
  if(maybe(.65)) S.skin       = pick(SKINS).val;
  if(maybe(.70)) S.hairColor1 = pick(HAIR_COLORS).id;
  if(maybe(.60)) S.eyeColor   = pick(EYE_COLORS).id;
  if(maybe(.70)) S.hairstyle  = pick(D.hairstyle.lbl).toLowerCase();
  if(maybe(.20)) S.eyeShape   = pick(D.eyeShape.lbl).toLowerCase();
  if(maybe(.65)) S.age        = pick(D.age.val.filter(v=>!['toddler','child','preteen'].includes(v)));
  if(maybe(.40)) S.body       = pick(D.body.val);
  if(maybe(.30)) S.hairColor2 = pick(HAIR_COLORS).id;

  // ── Outfit — Top+Bottom combo (60%) OR Full Outfit (40%) ──
  const sfwTops    = D.clothingTop.lbl;
  const sfwBottoms = D.clothingBottom.lbl;
  const sfwFull    = D.clothing.lbl.filter(x=>!x.startsWith('—'));
  if(maybe(.60)){
    if(maybe(.75)) S.clothingTop    = pick(sfwTops).toLowerCase();
    if(maybe(.75)) S.clothingBottom = pick(sfwBottoms).toLowerCase();
    S.clothing = null;
  } else {
    S.clothing      = pick(sfwFull).toLowerCase();
    S.clothingTop   = null;
    S.clothingBottom= null;
  }
  if(maybe(.30)) S.shoes       = pick(D.shoes.lbl).toLowerCase();
  if(maybe(.30)) S.sockLength  = pick(D.sockLength.lbl.filter(x=>x!=='None')).toLowerCase();
  if(maybe(.20)) S.sockColor   = pick(D.sockColor.lbl).toLowerCase();
  if(maybe(.40)) S.clothingAcc = pickN(D.clothingAcc.lbl, Math.ceil(Math.random()*2)).map(x=>x.toLowerCase());
  if(maybe(.40)) S.faceAcc     = pickN(D.faceAcc.lbl, 1).map(x=>x.toLowerCase());

  // ── NSFW picks when active ──
  if(wasNsfw){
    if(maybe(.70)) S.nsfwBody      = pickN(D.nsfwBody.lbl, Math.ceil(Math.random()*2)).map(x=>x.toLowerCase());
    if(maybe(.75)) S.nsfwClothing  = pickN(D.nsfwClothing.lbl, Math.ceil(Math.random()*2)).map(x=>x.toLowerCase());
    if(maybe(.70)) S.nsfwPose      = pickN(D.nsfwPose.lbl, 1).map(x=>x.toLowerCase());
    if(maybe(.50)) S.nsfwFluid     = pickN(D.nsfwFluid.lbl.filter(x=>!['Feces (Scat)'].includes(x)), Math.ceil(Math.random()*2)).map(x=>x.toLowerCase());
    if(maybe(.60)) S.nsfwEnv       = pickN(D.nsfwEnv.lbl, 1).map(x=>x.toLowerCase());
    if(maybe(.40)) S.nsfwIndicator = pickN(D.nsfwIndicator.lbl, 1).map(x=>x.toLowerCase());
    if(maybe(.50)) S.nsfwShot      = pickN(D.nsfwShot.lbl, 1).map(x=>x.toLowerCase());
  }

  // ── Mood ──
  if(maybe(.80)) S.expression = pick(D.expression.lbl).toLowerCase();
  if(maybe(.80)) S.poses      = pickN(D.pose.lbl, 1).map(x=>x.toLowerCase());
  if(maybe(.40)) S.effects    = pickN(D.effects.lbl, Math.ceil(Math.random()*2)).map(x=>x.toLowerCase());
  if(maybe(.30)) S.liquids    = pickN(D.liquids.lbl, 1).map(x=>x.toLowerCase());

  // ── Tools ──
  if(maybe(.25)) S.weapons     = pickN(D.weapons.lbl, 1).map(x=>x.toLowerCase());
  if(maybe(.30)) S.props       = pickN(D.props.lbl, 1).map(x=>x.toLowerCase());
  if(maybe(.20)) S.electronics = pickN(D.electronics.lbl, 1).map(x=>x.toLowerCase());
  if(maybe(.20)) S.otherItems  = pickN(D.otherItems.lbl, 1).map(x=>x.toLowerCase());

  // ── Scene ──
  if(maybe(.80)) S.environment = pick(D.environment.lbl).toLowerCase();
  if(maybe(.90)) S.style       = pick(D.style.lbl).toLowerCase();
  if(maybe(.35)) S.era         = pick(D.era.lbl).toLowerCase();
  if(maybe(.45)) S.animeStudio = pick(D.animeStudio.lbl).toLowerCase();
  if(maybe(.85)) S.colorGrade  = pick(D.colorGrade.lbl).toLowerCase();

  // ── Quality — always 3-4 tags ──
  S.quality = pickN(D.quality.lbl, Math.floor(Math.random()*2)+3).map(x=>x.toLowerCase());

  // ── Lighting ──
  if(maybe(.60)) S.lights = pickN(D.light.lbl, Math.ceil(Math.random()*2)).map(x=>x.toLowerCase());
  if(maybe(.25)) S.glow   = pick(D.glow.lbl.filter(g=>g.toLowerCase()!=='no glow')).toLowerCase();
  if(maybe(.35)) S.shadow = pick(D.shadow.lbl.filter(x=>x!=='No Shadows')).toLowerCase();

  // ── Style extras ──
  if(maybe(.55)) S.stroke = pick(D.stroke.lbl).toLowerCase();
  if(maybe(.45)) S.smooth = pick(D.smooth.lbl.filter(x=>x!=='Normal')).toLowerCase();

  // ── Camera ──
  S.shot  = pick(D.shot.lbl).toLowerCase();
  S.angle = pick(D.angle.lbl).toLowerCase();
  S.look  = pick(D.look.lbl).toLowerCase();
  if(maybe(.40)) S.lens       = pick(D.lens.lbl).toLowerCase();
  if(maybe(.45)) S.lensEffect = pick(D.lensEffect.lbl.filter(x=>x!=='None')).toLowerCase();

  // ── Avoid ──
  S.negBody    = pickN(D.negBody.lbl,    Math.ceil(Math.random()*3)+2).map(x=>x.toLowerCase());
  S.negQuality = pickN(D.negQuality.lbl, Math.ceil(Math.random()*3)+2).map(x=>x.toLowerCase());

  // ── Contextual coherence ──────────────────────────────────────────
  const hasCombat   = S.weapons.length > 0;
  const hasFighting = S.poses.some(p=>['fighting stance','running','jumping','crouching'].includes(p));

  // ── COMBAT / ACTION scene ──
  if(hasCombat || hasFighting){
    S.electronics = [];
    S.props = S.props.filter(p=>!['camera','smartphone','microphone','teddy bear','lollipop'].includes(p));
    S.expression = pick(['angry','confident','stoic','scared','shocked']);
    S.poses = S.poses.filter(p=>!['sleeping','sitting','reading','eating','drinking'].includes(p));
    if(!S.poses.length) S.poses = [pick(['fighting stance','running','jumping'])];
    // Combat clothing: armor/military preferred over formal
    if(S.clothing && ['evening gown','wedding dress','sleepwear / pajamas','swimsuit'].includes(S.clothing))
      S.clothing = pick(['fantasy armor','ninja outfit','military uniform','cyberpunk outfit']);
    // Dramatic lighting for combat
    if(!S.lights.length) S.lights = [pick(['rim light','backlight','neon light'])];
    if(!S.shadow) S.shadow = 'dramatic';
  }

  // ── CALM / RELAXED scene ──
  const calmPoses = ['sitting','sleeping','reading','eating','drinking','stretching','floating'];
  const hasCalmPose = S.poses.some(p=>calmPoses.includes(p));
  if(hasCalmPose && !hasCombat){
    S.weapons = [];
    if(['angry','stoic','scared','shocked'].includes(S.expression))
      S.expression = pick(['happy','gentle smile','shy','dreamy','tired','laughing','playful']);
    // Soft lighting for calm scenes
    if(!S.lights.length) S.lights = [pick(['natural light','soft diffused','candlelight'])];
  }

  // ── SLEEPING scene ──
  if(S.poses.includes('sleeping') || S.expression==='tired'){
    S.electronics = []; S.weapons = []; S.props = [];
    S.expression = pick(['tired','dreamy']);
    S.poses = ['sleeping'];
    if(S.clothing && !['sleepwear / pajamas','school uniform','sailor uniform'].includes(S.clothing))
      if(maybe(.6)) S.clothing = 'sleepwear / pajamas';
    if(!S.environment) S.environment = pick(['bedroom','castle']);
    S.lights = [pick(['candlelight','soft diffused','moonlight'])];
    S.shadow = 'soft shadows';
  }

  // ── DANCING scene ──
  if(S.poses.includes('dancing')){
    S.weapons = [];
    if(!['happy','laughing','playful','confident'].includes(S.expression))
      S.expression = pick(['happy','confident','playful']);
    if(maybe(.5)) S.clothing = pick(['idol outfit','gothic lolita','magical girl']);
    S.clothingTop = null; S.clothingBottom = null;
    if(!S.environment) S.environment = pick(['night city','castle','rooftop']);
  }

  // ── SWIMMING / BEACH scene ──
  if(S.environment==='beach' || S.clothing==='swimsuit' || S.clothing==='one-piece swimsuit'){
    S.electronics = S.electronics.filter(e=>!['laptop','gaming controller'].includes(e));
    S.weapons = [];
    if(!S.clothing || !['swimsuit','one-piece swimsuit'].includes(S.clothing)){
      S.clothing = pick(['swimsuit','one-piece swimsuit']);
      S.clothingTop = null; S.clothingBottom = null;
    }
    S.environment = 'beach';
    S.lights = [pick(['sunlight','golden hour','natural light'])];
    S.expression = pick(['happy','laughing','playful','confident']);
  }

  // ── SCHOOL scene ──
  if(S.environment==='school' || S.clothing==='school uniform' || S.clothing==='sailor uniform'){
    S.weapons = [];
    if(!S.clothing || !['school uniform','sailor uniform'].includes(S.clothing)){
      S.clothing = pick(['school uniform','sailor uniform']);
      S.clothingTop = null; S.clothingBottom = null;
    }
    S.environment = 'school';
    if(!['happy','gentle smile','shy','confident','laughing'].includes(S.expression))
      S.expression = pick(['happy','gentle smile','shy','confident']);
    if(maybe(.5)) S.props = [pick(['book','letter/envelope'])];
  }

  // ── FANTASY / MAGIC scene ──
  if(['fantasy realm','castle'].includes(S.environment) || ['magical girl','fantasy armor'].includes(S.clothing)){
    if(maybe(.6) && !S.weapons.length) S.weapons = [pick(['magic staff','magic wand','sword','katana'])];
    if(!S.effects.length) S.effects = pickN(['sparkles','magical aura','energy orbs','particles'],2);
    if(!S.glow) S.glow = pick(['ethereal glow','magical glow','soft glow']);
    if(!['magical girl','fantasy armor','gothic lolita'].includes(S.clothing)){
      if(maybe(.5)){ S.clothing = pick(['magical girl','fantasy armor']); S.clothingTop=null; S.clothingBottom=null; }
    }
  }

  // ── NIGHT CITY / CYBERPUNK scene ──
  if(S.environment==='night city' || S.clothing==='cyberpunk outfit'){
    if(!S.lights.length) S.lights = pickN(['neon light','rim light','backlight'],2);
    if(!S.colorGrade) S.colorGrade = pick(['neon palette','cyberpunk colors','cool tones']);
    if(maybe(.4) && !S.weapons.length) S.weapons = [pick(['pistol','rifle','katana','twin blades'])];
    if(S.clothing !== 'cyberpunk outfit' && maybe(.5)){ S.clothing='cyberpunk outfit'; S.clothingTop=null; S.clothingBottom=null; }
  }

  // ── FORMAL / ELEGANT scene ──
  const formalClothes=['formal suit','blazer & pants','little black dress','evening gown','wedding dress'];
  if(S.clothing && formalClothes.includes(S.clothing)){
    S.weapons = []; S.electronics = [];
    S.props = S.props.filter(p=>!['teddy bear','lollipop','gaming controller'].includes(p));
    if(!['gentle smile','confident','mysterious','stoic'].includes(S.expression))
      S.expression = pick(['gentle smile','confident','mysterious']);
    if(!S.environment) S.environment = pick(['castle','café','city street']);
    S.lights = [pick(['studio light','natural light','golden hour','candlelight'])];
  }

  // ── CAFE / READING scene ──
  if(S.environment==='café' || S.poses.includes('reading') || S.poses.includes('eating')){
    S.weapons = [];
    if(!S.props.length) S.props = [pick(['book','lollipop','umbrella'])];
    if(!['happy','gentle smile','shy','dreamy','tired'].includes(S.expression))
      S.expression = pick(['gentle smile','shy','dreamy']);
    if(!S.lights.length) S.lights = [pick(['natural light','soft diffused','candlelight'])];
  }

  // ── SPORTS / GYM scene ──
  const sportClothes=['tracksuit','sporty outfit'];
  const sportPoses=['running','jumping','crouching','stretching','fighting stance'];
  if((S.clothing && sportClothes.includes(S.clothing)) || S.poses.some(p=>sportPoses.includes(p))){
    S.weapons = [];
    if(S.clothing && !sportClothes.includes(S.clothing)){ S.clothing=pick(sportClothes); S.clothingTop=null; S.clothingBottom=null; }
    if(!['confident','stoic','tired','happy'].includes(S.expression))
      S.expression = pick(['confident','tired','happy']);
    if(!S.environment) S.environment = pick(['city street','rooftop','mountains']);
  }

  // ── OUTDOOR / NATURE scene ──
  if(['forest','mountains','desert','cherry blossom park'].includes(S.environment)){
    S.electronics = S.electronics.filter(e=>!['tv remote','smart watch'].includes(e));
    if(!S.lights.length) S.lights = [pick(['natural light','sunlight','golden hour'])];
    if(!S.colorGrade) S.colorGrade = pick(['earthy tones','warm tones','pastel palette']);
  }

  // ── SPACE / FANTASY ENVIRONMENT ──
  if(S.environment==='space'){
    S.weapons = S.weapons.filter(w=>!['fishing rod','broom','umbrella'].includes(w));
    if(!S.effects.length) S.effects = pickN(['sparkles','stars','energy orbs','particles'],2);
    if(!S.colorGrade) S.colorGrade = pick(['cool tones','monochrome blue','neon palette']);
  }

  // ── Fix conflicts after randomizing ──
  resolveConflicts(true);

  reflectUI(); rebuild(); toast('🎲 Randomized!');
}


/* ═══════════════════════════════════
   RESET
═══════════════════════════════════ */
function resetAll(silent=false){
  Object.keys(S).forEach(k=>{
    if(k==='favourites'||k==='characters') return;
    if(k==='negBody'||k==='negQuality'){S[k]=[];return;}
    if(k==='nsfw') S[k]=false;
    else if(Array.isArray(S[k])) S[k]=[];
    else S[k]=null;
  });
  S.extraPos=[];S.extraNeg=[];S.weights={};
  S.characters=[null,null,null];
  renderCharCards(); updateCharWarn();
  /* Reset UI */
  document.querySelectorAll('.ob,.cw,.cb').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.cb').forEach(b=>b.style.borderColor='transparent');
  document.querySelectorAll('.color-dot').forEach(d=>d.remove());
  if(window._closeColorPicker) window._closeColorPicker();
  document.querySelectorAll('.sb').forEach((x,i)=>{x.classList.remove('on');x.style.borderColor=SKINS[i].bg;});
  document.getElementById('nsfwBtn').classList.remove('on');
  toggleNSFW(false);
  renderTagBoxes();
  /* Clear prompt boxes immediately to empty state */
  const pe=document.getElementById('promptText');
  pe.textContent=(typeof t==='function'?t('prompt_empty'):'Start selecting options on the left…');
  pe.className='ptxt empty';
  document.getElementById('posWC').textContent='';
  const ne=document.getElementById('negativeText');
  ne.textContent=(typeof t==='function'?t('neg_empty'):'Select avoids above, or use the tag box below…');
  ne.className='ptxt neg empty';
  document.getElementById('negWC').textContent='';
  updateBlueprint();
  updateCounter();
  if(!silent) toast('🔄 All cleared');
}

/* ═══════════════════════════════════
   TOAST
═══════════════════════════════════ */
function toast(msg,type=''){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.className='toast'+(type?' '+type:'');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}
// i18n labels for conflict notification
const _arNames={
  'sleeping':'نائم','fighting stance':'وضعية قتال','running':'يجري',
  'jumping':'يقفز','sitting':'جالس','lying down':'مستلقي',
  'eating':'يأكل','drinking':'يشرب','dancing':'يرقص',
  'standing':'واقف','crouching':'قرفصاء','kneeling':'راكع',
  'stretching':'يتمدد','floating':'يطفو','reading':'يقرأ',
  't-shirt':'تيشيرت','crop top':'كروب توب','hoodie':'هودي',
  'tank top':'تانك توب','tube top':'تيوب توب','halter top':'هالتر توب',
  'jeans':'جينز','skinny jeans':'جينز ضيق','wide-leg jeans':'جينز واسع',
  'ripped jeans':'جينز ممزق','shorts':'شورت','denim shorts':'شورت جينز',
  'mini shorts':'شورت قصير','leggings':'ليغنز','pleated skirt':'تنورة مكسرة',
  'mini skirt':'تنورة قصيرة','long skirt':'تنورة طويلة',
  'jogger pants':'جوغر','sweatpants':'بنطلون رياضي','cargo pants':'كارغو',
  'swimsuit':'لباس سباحة','one-piece swimsuit':'لباس سباحة كامل',
  'formal suit':'بدلة رسمية','blazer & pants':'بليزر وبنطلون',
  'little black dress':'فستان أسود','evening gown':'فستان سهرة',
  'wedding dress':'فستان زفاف','military uniform':'زي عسكري',
  'fantasy armor':'درع فانتازيا','ninja outfit':'زي نينجا',
  'swimwear':'سباحة','bikini':'بيكيني','micro bikini':'بيكيني صغير',
  'lingerie':'لانجري','pasties only':'باستي فقط','see-through':'شفاف',
  'wet clothes':'ملابس مبللة','micro skirt':'تنورة صغيرة','no bra':'بدون حمالة',
  'skirt lifted':'تنورة مرفوعة','torn clothes':'ملابس ممزقة',
  'weapons':'أسلحة','electronics':'إلكترونيات',
  'بيكيني / سباحة':'بيكيني / سباحة','لباس سباحة':'لباس سباحة',
  'black & white':'أبيض وأسود','no shadows':'بدون ظلال',
  'chibi':'شيبي','extreme closeup':'تقريب شديد',
  'tied up':'مقيد','spread legs':'فارد رجليه',
  'on all fours':'على أربعة',
};

const _conflictI18n = {
  en: {
    title: 'Selection Conflict',
    detail: (a,b) => `"${a}" doesn't work with "${b}"`,
    hint: 'Hover to pause · auto-dismiss in 4s',
    // English names stay as-is (just capitalize first letter)
    names: {}
  },
  ar: {
    title: 'تعارض في الاختيار',
    detail: (a,b) => `"${a}" لا يتوافق مع "${b}"`,
    hint: 'مرر المؤشر للإيقاف المؤقت',
    names: _arNames  // reuse the existing Arabic map
  },
  ja: {
    title: '競合する選択',
    detail: (a,b) => `「${a}」と「${b}」は同時に選べません`,
    hint: 'ホバーで一時停止',
    names: {}
  }
};

function _conflictName(name){
  const lang = (typeof _lang !== 'undefined') ? _lang : 'en';
  const i18n = _conflictI18n[lang] || _conflictI18n.en;
  const k = (name||'').toString().toLowerCase();
  // Try language-specific name map first
  if(i18n.names && i18n.names[k]) return i18n.names[k];
  // For Arabic, also check _arNames directly
  if(lang==='ar' && _arNames[k]) return _arNames[k];
  // English: capitalize first letter of each word
  return name.toString().replace(/\b\w/g,c=>c.toUpperCase());
}

let _conflictToastTimer = null;
let _conflictHovered = false;

function toastConflict(name1, name2){
  if(_conflictToastTimer) clearTimeout(_conflictToastTimer);

  const notif  = document.getElementById('conflictNotif');
  const title  = document.getElementById('conflictNotifTitle');
  const detail = document.getElementById('conflictNotifDetail');
  const hint   = document.getElementById('conflictNotifHint');
  if(!notif) return;

  const lang = (typeof _lang !== 'undefined') ? _lang : 'en';
  const i18n = _conflictI18n[lang] || _conflictI18n.en;

  const a = _conflictName(name1);
  const b = _conflictName(name2);

  title.textContent  = i18n.title;
  detail.textContent = i18n.detail(a, b);
  hint.textContent   = i18n.hint;

  notif.classList.add('show');
  _conflictHovered = false;

  function startDismiss(){
    _conflictToastTimer = setTimeout(()=>{
      if(!_conflictHovered){
        notif.classList.remove('show');
        _conflictToastTimer = null;
      }
    }, 4000);
  }

  startDismiss();

  // Hover: pause dismiss
  notif.onmouseenter = ()=>{
    _conflictHovered = true;
    if(_conflictToastTimer){ clearTimeout(_conflictToastTimer); _conflictToastTimer=null; }
  };
  notif.onmouseleave = ()=>{
    _conflictHovered = false;
    startDismiss();
  };
}

function _ar(name){
  if(!name) return '';
  const k=name.toString().toLowerCase();
  return _arNames[k] || name;
}


/* ═══════════════════════════════════
   RADAR / HUD BACKGROUND ANIMATION
═══════════════════════════════════ */
(function initRadar(){
  const canvas = document.getElementById('bpRadar');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize(){
    const bp = canvas.parentElement;
    const rect = bp.getBoundingClientRect();
    if(rect.width > 0 && rect.height > 0){
      canvas.width  = Math.round(rect.width);
      canvas.height = Math.round(rect.height);
      W = canvas.width;
      H = canvas.height;
      draw();
    }
  }

  function getAccent(){
    const s = getComputedStyle(document.body);
    return s.getPropertyValue('--p').trim() || '#6366f1';
  }

  function hexToRgb(hex){
    hex = hex.replace('#','').trim();
    if(hex.length===3) hex=hex.split('').map(x=>x+x).join('');
    const n=parseInt(hex,16);
    return [(n>>16)&255,(n>>8)&255,n&255];
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);
    const accent = getAccent();
    let rgb;
    try{ rgb = hexToRgb(accent); } catch(e){ rgb=[99,102,241]; }
    const [r,g,b] = rgb;
    const col = (a) => `rgba(${r},${g},${b},${a})`;

    // Horizontal grid lines
    const hLines = 8;
    for(let i=1; i<hLines; i++){
      const y = H * i / hLines;
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y);
      ctx.strokeStyle = col(0.09); ctx.lineWidth = 0.6; ctx.stroke();
    }
    // Vertical grid lines
    const vLines = 10;
    for(let i=1; i<vLines; i++){
      const x = W * i / vLines;
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H);
      ctx.strokeStyle = col(0.06); ctx.lineWidth = 0.6; ctx.stroke();
    }
    // Corner tick marks
    const tick = 8;
    ctx.strokeStyle = col(0.22); ctx.lineWidth = 1;
    [[0,0,1,0,0,1],[W,0,-1,0,0,1],[0,H,1,0,0,-1],[W,H,-1,0,0,-1]].forEach(([x,y,dx1,dy1,dx2,dy2])=>{
      ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+dx1*tick,y+dy1*tick); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+dx2*tick,y+dy2*tick); ctx.stroke();
    });
    // Subtle center crosshair
    ctx.beginPath(); ctx.moveTo(W/2-6,H/2); ctx.lineTo(W/2+6,H/2);
    ctx.strokeStyle = col(0.18); ctx.lineWidth = 0.8; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(W/2,H/2-6); ctx.lineTo(W/2,H/2+6); ctx.stroke();
  }

  resize();

  let resizeTimer;
  function debouncedResize(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }
  if(window.ResizeObserver){
    new ResizeObserver(debouncedResize).observe(canvas.parentElement);
  }
  window.addEventListener('resize', debouncedResize);
  // Redraw on theme change
  document.body.addEventListener('themechange', draw);
})();

/* ── START ── */
/* ── RESIZABLE PANEL DIVIDER ── */
(function(){
  const resizer = document.getElementById('layoutResizer');
  const rp = document.querySelector('.rp');
  if(!resizer || !rp) return;
  let startX, startW;
  resizer.addEventListener('mousedown', e=>{
    startX = e.clientX;
    startW = rp.offsetWidth;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    function onMove(e){
      const dx = e.clientX - startX;
      const newW = Math.min(700, Math.max(280, startW + dx));
      rp.style.width = newW + 'px';
    }
    function onUp(){
      resizer.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
})();

// ── WELCOME MODAL ──
(function(){
  const overlay = document.getElementById('wlcOverlay');
  const btn     = document.getElementById('wlcStart');
  if(!overlay) return;

  function closeWelcome(){
    overlay.classList.remove('open');
  }

  btn.addEventListener('click', closeWelcome);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) closeWelcome(); });

  // Show every time
  overlay.classList.add('open');
})();

/* ═══════════════════════════════════
   i18n — LANGUAGE SYSTEM (EN + AR)
═══════════════════════════════════ */
const LANG_FLAGS = {en:'EN', ar:'AR', ja:'JA'};

const UI = {
  en: {
    /* ── Header ── */
    random:'Random', nsfw:'NSFW', saved:'Saved',
    tab_style:'Style', tab_mood:'Mood', tab_scene:'Scene', tab_look:'Look', tab_outfit:'Outfit',
    tab_camera:'Camera', tab_quality:'Quality', tab_character:'Character',
    tab_tools:'Tools', tab_avoid:'Avoid',
    /* ── Prompts ── */
    positive_prompt:'Positive Prompt', negative_prompt:'Negative Prompt',
    copy_full:'Copy Full Prompt', copy_pos:'Positive', copy_neg:'Negative',
    save_fav:'Save Favourite', saved_library:'Saved Library', fav_empty:'No saved favourites yet',
    reset_all:'Reset All', footer_copy:'Anime Prompt Studio © 2026. All rights reserved.',
    clear:'Clear', clear_all:'Clear All',
    prompt_empty:'Start selecting options on the right…',
    neg_empty:'Select avoids above, or add in the box below…',
    placeholder_pos:'＋ Extra Positive Tags — Enter or Tab',
    placeholder_neg:'＋ Extra Negative Tags — Enter or Tab',
    tags:' tags',
    /* ── Blueprint & Strength ── */
    blueprint_ttl:'Character Blueprint',
    prompt_strength:'Prompt Strength',
    /* ── Info menus ── */
    color_themes:'Color Themes', help_info:'Help & Info',
    about:'About', features:'Features', tips:'Tips & Tricks',
    language:'Language',
    /* ── Misc ── */
    girls:'Girls', boys:'Boys', start_building:'Start Building',
    /* ── Section titles ── */
    sec_color_grading:'Color Grading', sec_anime_studio:'Anime Studio / Director Style',
    sec_art_style:'Art Style', sec_era:'Era', sec_line_style:'Line Style',
    sec_shadows:'Shadows', sec_glow:'Glow & Bloom', sec_skin_smooth:'Skin Smoothness',
    sec_quality_tags:'Quality Tags', sec_lighting:'Lighting',
    sec_characters:'Characters in Scene', sec_age:'Age Group',
    sec_skin_tone:'Skin Tone', sec_body:'Body Type', sec_hairstyle:'Hairstyle',
    sec_hair_color1:'Hair Color (Primary)', sec_hair_color2:'Hair Ombré (2nd Color)',
    sec_eye_shape:'Eye Shape', sec_eye_color:'Eye Color',
    sec_clothing:'Clothing Type', sec_clothing_acc:'Clothing Accessories',
    sec_sock_color:'Sock Color', sec_sock_length:'Sock Length',
    sec_footwear:'Footwear', sec_face_acc:'Face Accessories',
    sec_expression:'Expression', sec_pose:'Pose & Action',
    sec_effects:'Special Effects', sec_liquids:'Liquids & Materials',
    sec_weapons:'Weapons', sec_props:'Props & Objects',
    sec_electronics:'Electronics', sec_other:'Other Items',
    sec_environment:'Environment', sec_mood:'Mood / Atmosphere',
    sec_shot_range:'Shot Range', sec_camera_angle:'Camera Angle',
    sec_looking:'Looking Direction', sec_lens_type:'Lens Type',
    sec_lens_effect:'Lens Effect', sec_body_parts:'Body Parts Focus',
    sec_neg_prompt:'Negative Prompt', sec_tools:'Tools', sec_look:'Look', sec_outfit:'Outfit',
    /* ── Negative tab ── */
    what_to_avoid:'What To Avoid',
    avoid_desc:'Select anything you want excluded from the final image.',
    neg_body_anatomy:'Body & Anatomy', neg_image_quality:'Image Quality',
    body_parts_note:'Focus camera on specific body parts — NSFW mode only.',
    /* ── Blueprint labels ── */
    bp_char:'Characters', bp_age:'Age', bp_skin:'Skin & Body',
    bp_hair:'Hair', bp_eyes:'Eyes', bp_outfit:'Outfit',
    bp_mood:'Mood', bp_tools:'Tools', bp_scene:'Scene',
    bp_camera:'Camera', bp_quality:'Quality',
    /* ── About modal ── */
    about_p1:'Anime Prompt Studio is a free, browser-based tool designed to help artists and enthusiasts craft detailed, high-quality prompts for AI image generation.',
    about_p2:'Built with a focus on anime and illustration styles, it gives you full control over character appearance, outfit, mood, scene, lighting, camera, and more — all in one place.',
    about_p3:'No account required. No data collected. Everything runs locally in your browser.',
    about_sig:'— Made with ✦ by MD.AI SYSTEMS',
    /* ── Features modal ── */
    feat_themes_t:'13 Color Themes', feat_themes_d:'Fully themed UI that adapts to your style',
    feat_char_t:'Full Character Builder', feat_char_d:'Hair, eyes, skin, body, outfit and more',
    feat_cloth_t:'50+ Clothing Options', feat_cloth_d:'Organized by category — tops, bottoms, full outfits',
    feat_studio_t:'Anime Studio Styles', feat_studio_d:'Ghibli, Ufotable, MAPPA, Makoto Shinkai and more',
    feat_color_t:'Color Grading', feat_color_d:'16 palette options from pastel to cyberpunk',
    feat_cam_t:'Camera Controls', feat_cam_d:'Shot range, angle, lens type and focus effects',
    feat_meter_t:'Prompt Strength Meter', feat_meter_d:'Detects conflicts, overloads and missing elements',
    feat_weight_t:'Tag Weight Slider', feat_weight_d:'Click any tag to boost or reduce its influence',
    feat_favs_t:'Favourites System', feat_favs_d:'Save and reload your best prompt combinations',
    feat_img_t:'Image Analyzer', feat_img_d:'Extract and reverse-engineer prompts from images',
    feat_rand_t:'Randomizer', feat_rand_d:'Generate a full random character in one click',
    feat_nsfw_t:'NSFW Mode', feat_nsfw_d:'Age-gated adult content section',
    /* ── Tips modal ── */
    tip1_t:'Start with Style', tip1_d:"Always pick an Art Style or Anime Studio first — it's the single most impactful tag for the final look.",
    tip2_t:'Use the Strength Meter', tip2_d:'Watch the Prompt Strength score. Conflicts (red) hurt quality the most — fix those before adding more tags.',
    tip3_t:'Lighting is Everything', tip3_d:'Add at least one lighting type. Rim Light + one ambient source gives dramatic, professional-looking results.',
    tip4_t:'Tag Weight Slider', tip4_d:'Click any tag in the prompt box to open the weight slider. Boost key elements like style or lighting above 1.3 for more impact.',
    tip5_t:'Quality Tags Matter', tip5_d:'Always include 3–4 quality tags: Masterpiece, Best Quality, Ultra Detailed. These are expected by most anime models.',
    tip6_t:'Less is More', tip6_d:'3–4 lighting types or 5+ effects will confuse the model. Keep each category focused — the Overload warning will alert you.',
    tip7_t:'Save Your Favourites', tip7_d:'Found a great combination? Hit the ♡ button to save it. You can load it any time from the Favourites menu.',
    tip8_t:'Use Extra Tags', tip8_d:'The Extra Positive Tags field is perfect for model-specific tokens or very niche details not covered by the builder.',
    /* ── Welcome modal ── */
    wlc_sub:'Your ultimate AI image prompt builder — free, fast, no account needed.',
    wlc_about_title:'About this project',
    wlc_about_body:'Anime Prompt Studio is a passion project built by <span class="wlc-brand">MD.AI SYSTEMS</span> — a team focused on making AI tools accessible and enjoyable for everyone. This tool runs entirely in your browser, stores nothing on any server, and is completely free.',
    wlc_footer:'No account needed · No data collected · Runs in your browser',
    wlc_feat1_t:'Full Character Builder', wlc_feat1_d:'Hair, eyes, skin, body, outfit & more',
    wlc_feat2_t:'5 Color Themes', wlc_feat2_d:'Fully themed UI that adapts to your style',
    wlc_feat3_t:'Prompt Strength Meter', wlc_feat3_d:'Detects conflicts & missing elements',
    wlc_feat4_t:'Favourites System', wlc_feat4_d:'Save & reload your best combinations',
    wlc_feat5_t:'One-Click Randomizer', wlc_feat5_d:'Generate a full character instantly',
    wlc_feat6_t:'Tag Weight Slider', wlc_feat6_d:"Fine-tune every tag's influence",
    /* ── Age Gate ── */
    ag_title:'Adults Only — 18+', ag_subtitle:'NSFW Content Warning',
    ag_body1:'This section contains mature content intended for adults only.',
    ag_body2:'By proceeding, you confirm the following:',
    ag_check1:'I am 18 years of age or older',
    ag_check2:'I take full responsibility for my use of this content',
    ag_check3:'Accessing this content is legal in my country or region',
    ag_check4:'I will not use generated prompts to create illegal content',
    ag_disclaimer:'The creator of this tool bears <strong>no responsibility</strong> for any misuse, harmful content generation, or violation of third-party platform terms. This tool generates text prompts only. You are solely responsible for how you use them.',
    ag_no:'No, I am Under 18', ag_yes:'Yes, I am 18 or Older',
    ag_footer:'⚠️ For artistic prompt generation purposes only',
  },
  ar: {
    /* ── Header ── */
    random:'عشوائي', nsfw:'محتوى ناضج', saved:'المحفوظات',
    tab_style:'الأسلوب', tab_mood:'المزاج', tab_scene:'المشهد', tab_look:'المظهر', tab_outfit:'الزي',
    tab_camera:'الكاميرا', tab_quality:'الجودة', tab_character:'الشخصية',
    tab_tools:'الأدوات', tab_avoid:'تجنب',
    /* ── Prompts ── */
    positive_prompt:'البرومبت الإيجابي', negative_prompt:'البرومبت السلبي',
    copy_full:'نسخ البرومبت كاملاً', copy_pos:'إيجابي', copy_neg:'سلبي',
    save_fav:'حفظ كمفضلة', saved_library:'المكتبة المحفوظة', fav_empty:'لا توجد مفضلات محفوظة بعد',
    reset_all:'إعادة تعيين الكل', footer_copy:'Anime Prompt Studio © 2026. جميع الحقوق محفوظة.',
    clear:'مسح', clear_all:'مسح الكل',
    prompt_empty:'ابدأ باختيار الخيارات…',
    neg_empty:'اختر ما تريد تجنبه أعلاه أو أضفه في الحقل أدناه…',
    placeholder_pos:'＋ تاغات إيجابية إضافية — Enter أو Tab',
    placeholder_neg:'＋ تاغات سلبية إضافية — Enter أو Tab',
    tags:' تاغ',
    /* ── Blueprint & Strength ── */
    blueprint_ttl:'مخطط الشخصية',
    prompt_strength:'قوة البرومبت',
    /* ── Info menus ── */
    color_themes:'ألوان الثيم', help_info:'مساعدة ومعلومات',
    about:'حول', features:'المميزات', tips:'نصائح وحيل',
    language:'اللغة',
    /* ── Misc ── */
    girls:'بنات', boys:'أولاد', start_building:'ابدأ الآن',
    /* ── Section titles ── */
    sec_color_grading:'تدرج الألوان', sec_anime_studio:'أسلوب الاستوديو الأنيمي',
    sec_art_style:'أسلوب الرسم', sec_era:'الحقبة الزمنية', sec_line_style:'أسلوب الخطوط',
    sec_shadows:'الظلال', sec_glow:'التوهج والإشراق', sec_skin_smooth:'نعومة البشرة',
    sec_quality_tags:'تاغات الجودة', sec_lighting:'الإضاءة',
    sec_characters:'الشخصيات في المشهد', sec_age:'الفئة العمرية',
    sec_skin_tone:'لون البشرة', sec_body:'نوع الجسم', sec_hairstyle:'تسريحة الشعر',
    sec_hair_color1:'لون الشعر الأساسي', sec_hair_color2:'لون الشعر الثانوي',
    sec_eye_shape:'شكل العينين', sec_eye_color:'لون العينين',
    sec_clothing:'نوع الملابس', sec_clothing_acc:'إكسسوارات الملابس',
    sec_sock_color:'لون الجوارب', sec_sock_length:'طول الجوارب',
    sec_footwear:'الأحذية', sec_face_acc:'إكسسوارات الوجه',
    sec_expression:'التعبير', sec_pose:'الوضعية والحركة',
    sec_effects:'التأثيرات الخاصة', sec_liquids:'السوائل والمواد',
    sec_weapons:'الأسلحة', sec_props:'الأدوات والأشياء',
    sec_electronics:'الإلكترونيات', sec_other:'أشياء أخرى',
    sec_environment:'البيئة والمكان', sec_mood:'المزاج والجو العام',
    sec_shot_range:'نطاق اللقطة', sec_camera_angle:'زاوية الكاميرا',
    sec_looking:'اتجاه النظر', sec_lens_type:'نوع العدسة',
    sec_lens_effect:'تأثير العدسة', sec_body_parts:'تركيز الكاميرا على الجسم',
    sec_neg_prompt:'البرومبت السلبي', sec_tools:'الأدوات', sec_look:'المظهر', sec_outfit:'الزي',
    /* ── Negative tab ── */
    what_to_avoid:'ما يجب تجنبه',
    avoid_desc:'اختر كل ما تريد استبعاده من الصورة النهائية.',
    neg_body_anatomy:'الجسم والتشريح', neg_image_quality:'جودة الصورة',
    body_parts_note:'تركيز الكاميرا على أجزاء محددة — يتطلب تفعيل وضع المحتوى الناضج.',
    /* ── Blueprint labels ── */
    bp_char:'الشخصيات', bp_age:'العمر', bp_skin:'البشرة والجسم',
    bp_hair:'الشعر', bp_eyes:'العيون', bp_outfit:'الزي',
    bp_mood:'المزاج', bp_tools:'الأدوات', bp_scene:'المشهد',
    bp_camera:'الكاميرا', bp_quality:'الجودة',
    /* ── About modal ── */
    about_p1:'Anime Prompt Studio أداة مجانية تعمل في المتصفح، مصممة لمساعدة الفنانين والمهتمين على صياغة برومبتات تفصيلية عالية الجودة لتوليد الصور بالذكاء الاصطناعي.',
    about_p2:'مبنية بتركيز على أسلوب الأنيمي والرسوم التوضيحية، تمنحك تحكماً كاملاً في مظهر الشخصية والزي والمزاج والمشهد والإضاءة والكاميرا — كل شيء في مكان واحد.',
    about_p3:'لا حساب مطلوب. لا بيانات تُجمع. كل شيء يعمل محلياً في متصفحك.',
    about_sig:'— صُنع بـ ✦ بواسطة MD.AI SYSTEMS',
    /* ── Features modal ── */
    feat_themes_t:'١٣ ثيم ملوّن', feat_themes_d:'واجهة مخصصة تتكيف مع أسلوبك',
    feat_char_t:'بناء شخصية كامل', feat_char_d:'شعر، عيون، بشرة، جسم، ملابس والمزيد',
    feat_cloth_t:'+٥٠ خيار ملابس', feat_cloth_d:'منظمة بالفئات — أعلى، أسفل، أطقم كاملة',
    feat_studio_t:'أساليب الاستوديو الأنيمي', feat_studio_d:'غيبلي، يوفوتابل، ماببا، ماكوتو شينكاي والمزيد',
    feat_color_t:'تدرج الألوان', feat_color_d:'١٦ خيار لوحة من الباستيل حتى السيبربانك',
    feat_cam_t:'التحكم بالكاميرا', feat_cam_d:'نطاق اللقطة، الزاوية، نوع العدسة وتأثيرات التركيز',
    feat_meter_t:'مقياس قوة البرومبت', feat_meter_d:'يكتشف التعارضات والزيادات والعناصر المفقودة',
    feat_weight_t:'شريط وزن التاغ', feat_weight_d:'انقر أي تاغ لرفع أو خفض تأثيره',
    feat_favs_t:'نظام المفضلة', feat_favs_d:'احفظ وأعد تحميل أفضل تركيباتك',
    feat_img_t:'محلل الصور', feat_img_d:'استخرج وعكس هندسة البرومبتات من الصور',
    feat_rand_t:'الاختيار العشوائي', feat_rand_d:'توليد شخصية كاملة بنقرة واحدة',
    feat_nsfw_t:'وضع المحتوى الناضج', feat_nsfw_d:'قسم محتوى للبالغين مع تحقق من العمر',
    /* ── Tips modal ── */
    tip1_t:'ابدأ بالأسلوب', tip1_d:'اختر دائماً أسلوب رسم أو استوديو أنيمي أولاً — فهو أكثر تاغ يؤثر على النتيجة النهائية.',
    tip2_t:'استخدم مقياس القوة', tip2_d:'راقب نقاط قوة البرومبت. التعارضات (الحمراء) تضر الجودة أكثر — عالجها قبل إضافة المزيد.',
    tip3_t:'الإضاءة كل شيء', tip3_d:'أضف نوع إضاءة واحداً على الأقل. Rim Light مع مصدر ضوء محيطي يعطي نتائج درامية واحترافية.',
    tip4_t:'شريط وزن التاغ', tip4_d:'انقر أي تاغ في صندوق البرومبت لفتح شريط الوزن. ارفع العناصر الرئيسية كالأسلوب والإضاءة فوق ١.٣ لتأثير أقوى.',
    tip5_t:'تاغات الجودة مهمة', tip5_d:'أضف دائماً ٣-٤ تاغات جودة: Masterpiece, Best Quality, Ultra Detailed — تتوقعها معظم نماذج الأنيمي.',
    tip6_t:'الأقل هو الأكثر', tip6_d:'٣-٤ أنواع إضاءة أو ٥+ تأثيرات ستربك النموذج. ركز كل فئة — تحذير Overload سيُنبهك.',
    tip7_t:'احفظ مفضلاتك', tip7_d:'وجدت تركيبة رائعة؟ اضغط زر ♡ لحفظها. يمكنك تحميلها في أي وقت من قائمة المفضلة.',
    tip8_t:'استخدم التاغات الإضافية', tip8_d:'حقل التاغات الإيجابية الإضافية مثالي للتوكنات الخاصة بالنموذج أو التفاصيل الدقيقة غير المغطاة.',
    /* ── Welcome modal ── */
    wlc_sub:'أفضل أداة لبناء برومبتات الذكاء الاصطناعي — مجانية، سريعة، لا حساب مطلوب.',
    wlc_about_title:'حول هذا المشروع',
    wlc_about_body:'Anime Prompt Studio مشروع بُني بشغف من قِبل <span class="wlc-brand">MD.AI SYSTEMS</span> — فريق يركز على جعل أدوات الذكاء الاصطناعي متاحة وممتعة للجميع. تعمل هذه الأداة بالكامل في متصفحك، ولا تحفظ أي شيء على أي خادم، وهي مجانية تماماً.',
    wlc_footer:'لا حساب مطلوب · لا بيانات تُجمع · يعمل في متصفحك',
    wlc_feat1_t:'بناء شخصية كامل', wlc_feat1_d:'شعر، عيون، بشرة، جسم، ملابس والمزيد',
    wlc_feat2_t:'٥ ثيمات ملونة', wlc_feat2_d:'واجهة مخصصة تتكيف مع أسلوبك',
    wlc_feat3_t:'مقياس قوة البرومبت', wlc_feat3_d:'يكتشف التعارضات والعناصر المفقودة',
    wlc_feat4_t:'نظام المفضلة', wlc_feat4_d:'احفظ وأعد تحميل أفضل تركيباتك',
    wlc_feat5_t:'اختيار عشوائي بنقرة', wlc_feat5_d:'ولّد شخصية كاملة فوراً',
    wlc_feat6_t:'شريط وزن التاغ', wlc_feat6_d:'ضبط دقيق لتأثير كل تاغ',
    /* ── Age Gate ── */
    ag_title:'للبالغين فقط — +١٨', ag_subtitle:'تحذير: محتوى ناضج',
    ag_body1:'يحتوي هذا القسم على محتوى ناضج مخصص للبالغين فقط.',
    ag_body2:'بالمتابعة، فأنت تؤكد التالي:',
    ag_check1:'عمري ١٨ عاماً أو أكثر',
    ag_check2:'أتحمل المسؤولية الكاملة عن استخدامي لهذا المحتوى',
    ag_check3:'الوصول لهذا المحتوى قانوني في بلدي أو منطقتي',
    ag_check4:'لن أستخدم البرومبتات المُنشأة لإنتاج محتوى غير قانوني',
    ag_disclaimer:'منشئ هذه الأداة <strong>لا يتحمل أي مسؤولية</strong> عن أي سوء استخدام أو إنتاج محتوى ضار أو انتهاك لشروط منصات خارجية. هذه الأداة تُنتج نصوص برومبت فقط. أنت وحدك المسؤول عن طريقة استخدامها.',
    ag_no:'لا، عمري أقل من ١٨', ag_yes:'نعم، عمري ١٨ أو أكثر',
    ag_footer:'⚠️ لأغراض توليد برومبتات فنية فقط',
  }
};

/* ── Option button labels (EN→AR) ── */
const OPT_AR = {
  // ── Characters ──
  '1 Girl':'فتاة واحدة','1 Man':'رجل واحد','2 Girls':'فتاتان','2 Men':'رجلان',
  '1 Girl + 1 Man':'فتاة ورجل','3+ Girls':'٣+ فتيات','3+ Men':'٣+ رجال','Mixed Group':'مجموعة مختلطة',
  // ── Age ──
  'Toddler (0–3)':'طفل رضيع','Child (4–8)':'طفل','Preteen (9–12)':'مراهق مبكر',
  'Teen (13–17)':'مراهق','Young Adult (18–25)':'شاب','Adult (26–35)':'بالغ',
  'Middle-Aged (36–50)':'متوسط العمر','Elderly (51+)':'كبير السن',
  // ── Gender ──
  'Feminine':'أنثوي','Masculine':'ذكوري','Androgynous':'محايد الجنس',
  // ── Body ──
  'Petite':'نحيلة','Slim':'رشيق','Athletic':'رياضي','Toned':'متناسق','Curvy':'ممتلئة',
  'Hourglass':'شكل الساعة الرملية','Muscular':'عضلي','Chubby':'ممتلئ قليلاً','Tall':'طويل','Short':'قصير',
  'Slim Waist':'خصر رفيع','Big Butt':'مؤخرة كبيرة','Thick Thighs':'فخذان سميكتان',
  'Curvy Hips':'وركان عريضان','Small Breasts':'صدر صغير','Large Breasts':'صدر كبير',
  'Huge Breasts':'صدر ضخم',
  // ── Skin ──
  'Fair/Pale':'فاتحة جداً','Light':'فاتحة','Medium':'متوسطة','Tan':'سمراء خفيفة','Deep':'سمراء','Dark':'داكنة',
  // ── Hairstyle ──
  'Long Straight':'مستقيم طويل','Long Wavy':'متموج طويل','Long Curly':'مجعد طويل',
  'Twin Tails':'ذيلان','High Ponytail':'ذيل حصان علوي','Side Ponytail':'ذيل حصان جانبي',
  'Braid':'ضفيرة','Double Braid':'ضفيرتان','Bun':'كعكة','Messy Bun':'كعكة مبعثرة',
  'Short Bob':'بوب قصير','Pixie Cut':'بيكسي','Hime Cut':'هيمي','Fluffy':'مفرفش',
  'Wet Hair':'شعر مبلل',
  // ── Hair Colors ──
  'White':'أبيض','Silver':'فضي','Blonde':'أشقر','Gold':'ذهبي','Peach':'خوخي',
  'Coral':'مرجاني','Red':'أحمر','Auburn':'بني أحمر','Pink':'وردي','Lavender':'خزامى',
  'Purple':'بنفسجي','Magenta':'فوشيا','Blue':'أزرق','Indigo':'نيلي','Cyan':'سماوي',
  'Teal':'أزرق مخضر','Mint':'نعناعي','Green':'أخضر','Brown':'بني','Black':'أسود',
  'Navy':'كحلي',
  // ── Eye Shape ──
  'Large Round':'كبير مستدير','Almond':'لوزي','Upturned':'مرفوع','Downturned':'منخفض',
  'Cat-like':'قط','Doe Eyes':'عيون غزالة','Hooded':'مغطى',
  // ── Eye Colors ──
  'Violet':'بنفسجي فاتح','Grey':'رمادي','Emerald':'زمردي','Sapphire':'ياقوتي','Rainbow':'قوس قزح',
  'Jade':'يشمي','Amber':'كهرماني',
  // ── Expression ──
  'Happy':'سعيد','Sad':'حزين','Angry':'غاضب','Shy':'خجول','Confident':'واثق',
  'Gentle Smile':'ابتسامة لطيفة','Laughing':'ضاحك','Crying':'باكي','Scared':'خائف',
  'Stoic':'هادئ','Seductive':'مغرٍ','Tired':'متعب','Surprised':'مندهش',
  'Playful':'مرح','Mysterious':'غامض','Dreamy':'حالم','Dramatic':'درامي',
  'Shocked':'مصدوم','Eyes Closed':'عيون مغلقة',
  // ── Clothing Separators ──
  '— Tops —':'— قمصان —','— Bottoms —':'— سراويل —','— Dresses —':'— فساتين —',
  '— Sets —':'— طقم —','— Uniforms —':'— زي —','— Specialty —':'— خاص —',
  // ── Clothing ──
  'T-Shirt':'تيشيرت','Crop Top':'توب قصير','Tied Crop Top':'توب مربوط',
  'Off-Shoulder Top':'توب كتف مكشوف','Tank Top':'قميص بلا أكمام',
  'Tube Top':'توب أنبوبي','Sleeveless Top':'بلا أكمام',
  'Long Sleeve Shirt':'قميص طويل الأكمام','Button-Up Shirt':'قميص بأزرار',
  'Oversized Shirt':'قميص كبير','Graphic Tee':'تيشيرت مطبوع',
  'Polo Shirt':'بولو','Ribbed Top':'توب مضلع','Halter Top':'هالتر توب',
  'Hoodie':'هودي','Zip-Up Hoodie':'هودي بسحاب','Oversized Hoodie':'هودي كبير',
  'Sweatshirt':'سويت شيرت',
  'Jeans':'جينز','Skinny Jeans':'جينز ضيق','Wide-Leg Jeans':'جينز واسع',
  'Ripped Jeans':'جينز ممزق','Shorts':'شورت','Denim Shorts':'شورت جينز',
  'Mini Shorts':'شورت قصير','High-Waist Shorts':'شورت خصر عالي',
  'Jogger Pants':'جوغر','Sweatpants':'سويت بانت','Cargo Pants':'كارغو',
  'Leggings':'ليغنز','Pleated Skirt':'تنورة مكسرات','Mini Skirt':'تنورة قصيرة',
  'Plaid Skirt':'تنورة مربعات','Long Skirt':'تنورة طويلة','Denim Skirt':'تنورة جينز',
  'Micro Skirt':'تنورة مايكرو','Skirt Lifted':'تنورة مرفوعة',
  'Little Black Dress':'فستان أسود صغير','Evening Gown':'فستان سهرة',
  'Wedding Dress':'فستان زفاف',
  'School Uniform':'زي مدرسي','Sailor Uniform':'زي بحري','Tracksuit':'بدلة رياضية',
  'Casual Streetwear':'ملابس كاجوال','Sporty Outfit':'زي رياضي',
  'Sleepwear / Pajamas':'بيجاما','Swimsuit':'مايوه','One-Piece Swimsuit':'مايوه كامل',
  'Swimwear':'ملابس سباحة','Bikini':'بيكيني','Micro Bikini':'بيكيني مايكرو',
  'Formal Suit':'بدلة رسمية','Blazer & Pants':'بليزر وبنطال',
  'Magical Girl':'فتاة سحرية','Maid Outfit':'زي خادمة','Gothic Lolita':'غوثيك لوليتا',
  'Kimono':'كيمونو','Yukata':'يوكاتا','Fantasy Armor':'درع خيالي',
  'Ninja Outfit':'زي نينجا','Military Uniform':'زي عسكري',
  'Lingerie':'لانجري','See-through':'شفاف','Sheer':'شفاف خفيف',
  'Naked':'عارية','Nude':'عارية','Topless':'بلا توب','No Bra':'بلا حمالة',
  'Panties Visible':'ملابس داخلية ظاهرة',
  // ── Accessories ──
  'Ribbon Bow':'ربطة شريط','Belt':'حزام','Choker':'طوق','Backpack':'حقيبة ظهر',
  'Suspenders':'حمالات','Gloves':'قفازات','Scarf':'وشاح','Cape':'رداء',
  'Apron':'مريلة','Tie':'ربطة عنق',
  'Glasses':'نظارات','Round Glasses':'نظارات دائرية','Sunglasses':'نظارات شمسية',
  'Flower Crown':'تاج ورد','Headband':'عصابة رأس','Headphones':'سماعات',
  'Hair Clip':'مشبك شعر','Eye Patch':'رقعة عين','Mask':'قناع','Veil':'طرحة',
  'Halo':'هالة','Horns':'قرون','Crown':'تاج','Animal Ears':'آذان حيوان',
  'Collar & Leash':'طوق وسلسلة','Handcuffs/BDSM':'قيود',
  // ── Footwear ──
  'Sneakers':'أحذية رياضية','Boots':'بوت','Heels':'كعب عالٍ','Sandals':'صندل',
  'Loafers':'لوفر','Barefoot':'حافي القدمين','Platform':'بلاتفورم',
  'School Shoes':'حذاء مدرسي',
  // ── Sock ──
  'Thigh-High':'حتى الفخذ','Over-Knee':'فوق الركبة','Knee-High':'حتى الركبة','Ankle':'كاحل',
  // ── Sock Color ──
  'Striped':'مخطط',
  // ── Pose ──
  'Standing':'وقوف','Sitting':'جلوس','Kneeling':'ركوع','Crouching':'انحناء',
  'Lying Down':'استلقاء','Running':'ركض','Jumping':'قفز','Dancing':'رقص',
  'Fighting Stance':'وضعية قتال','Floating':'طفو','Stretching':'تمدد',
  'Reading':'قراءة','Eating':'أكل','Drinking':'شرب','Sleeping':'نوم',
  'In Bed':'في السرير','Between Legs':'بين الأرجل','Spread Legs':'أرجل مفتوحة',
  'On All Fours':'على الأربع','Self-Touching':'تلمس ذاتي',
  'Fingering':'إيروتيك','Tied Up':'مربوط',
  // ── Effects ──
  'Fire':'نار','Lightning':'برق','Electricity':'كهرباء','Ice Crystals':'بلورات ثلج',
  'Water Splash':'رشة ماء','Smoke':'دخان','Sparkles':'لمعان','Particles':'جسيمات',
  'Energy Orbs':'كرات طاقة','Magical Aura':'هالة سحرية','Magical Glow':'توهج سحري',
  'Stars':'نجوم','Rose':'وردة','Cherry Blossoms':'أزهار الكرز','Dew Drops':'قطرات ندى',
  'Glistening':'لامع','Ethereal Glow':'توهج أثيري','Rain-Soaked':'مبلل بالمطر',
  'Wet/Soaked':'مبلل','Sweat':'عرق','Sweat Droplets':'قطرات عرق',
  'Tears':'دموع','Body Oil':'زيت جسم','Dripping':'يقطر',
  'Erect Nipples':'حلمات منتصبة','Cum':'سائل منوي','Cum on Face':'سائل على الوجه',
  'Cum on Body':'سائل على الجسم','Cum Inside':'سائل داخلي',
  'Milk/Lactation':'حليب','Urine/Squirt':'سائل','Vaginal Fluid':'إفراز أنثوي',
  'Anal Fluid':'إفراز شرجي','Feces (Scat)':'برازي','Semen Stain':'بقعة','Fecal Stain':'بقعة',
  'Urine Stain':'بقعة',
  // ── Scene/Environment ──
  'Forest':'غابة','Beach':'شاطئ','Desert':'صحراء','Mountains':'جبال',
  'Space':'الفضاء','City Street':'شارع المدينة','Night City':'مدينة ليلية',
  'Rooftop':'السطح','School':'مدرسة','Bedroom':'غرفة النوم','Bathroom':'حمام',
  'Shower':'دش','Onsen':'حمام ياباني','Onsen Bath':'حوض ياباني',
  'Hotel Room':'غرفة فندق','Locker Room':'غرفة تغيير','Sex Dungeon':'قبو',
  'Castle':'قلعة','Fantasy Realm':'عالم خيالي','Cherry Blossom Park':'حديقة أزهار',
  'Public Outdoor':'خارجي عام','Adult Club':'نادي',
  // ── Mood ──
  'Dramatic':'درامي','Dreamy':'حالم','Mysterious':'غامض','Playful':'مرح',
  'Professional':'احترافي','Cinematic':'سينمائي','Normal':'طبيعي','None':'لا شيء',
  // ── Art Style ──
  'Anime':'أنيمي','Manga / Ink':'مانجا / حبر','Digital Painting':'رسم رقمي',
  'Oil Painting':'ألوان زيتية','Watercolor':'ألوان مائية','Sketch / Pencil':'رسم بالقلم',
  'Pixel Art':'فن بيكسل','16-bit Pixel Art':'بيكسل 16 بت','32-bit Pixel Art':'بيكسل 32 بت',
  'Sprite Art':'فن الـ Sprite','Voxel Art':'فن فوكسل','Vector Art':'رسم متجهي',
  'Chibi':'شيبي','Cel Shading':'تظليل خلية','Concept Art':'رسم مفاهيمي',
  'Fantasy Art':'فن خيالي','Painterly':'لوحاتي','Flat Design':'تصميم مسطح',
  'Low Poly':'بوليغون منخفض','Textured':'نسيج','Dark Ink':'حبر داكن',
  // ── Era ──
  '1980s':'الثمانينيات','1990s':'التسعينيات','2000s':'الألفية','2010s':'العقد الثاني',
  '2020s':'العقد الثالث','Retro 90s Anime':'أنيمي تسعينيات',
  // ── Line Style ──
  'Bold Lines':'خطوط سميكة','Medium Lines':'خطوط متوسطة','Thin Lines':'خطوط رفيعة',
  'Thick Lines':'خطوط سميكة جداً','No Outline':'بلا خطوط','Soft Edges':'حواف ناعمة',
  // ── Shadows ──
  'Hard Shadows':'ظلال قوية','Soft Shadows':'ظلال ناعمة','Medium Shadows':'ظلال متوسطة',
  'No Shadows':'بلا ظلال',
  // ── Glow ──
  'Soft Glow':'توهج ناعم','Golden Glow':'توهج ذهبي','Magical Glow':'توهج سحري',
  'Warm Glow':'توهج دافئ','No Glow':'بلا توهج',
  // ── Skin Smoothness ──
  'Smooth Skin':'بشرة ناعمة','Silky':'حريري',
  // ── Quality ──
  'Masterpiece':'تحفة فنية','Best Quality':'أفضل جودة','Ultra Detailed':'تفاصيل فائقة',
  'High Resolution':'دقة عالية','4K':'4K','8K':'8K','Award-Winning':'حائز على جوائز',
  // ── Lighting ──
  'Natural Light':'ضوء طبيعي','Sunlight':'ضوء الشمس','Golden Hour':'الساعة الذهبية',
  'Moonlight':'ضوء القمر','Candlelight':'ضوء الشمعة','Neon Light':'ضوء نيون',
  'Studio Light':'ضوء الاستوديو','Backlight':'إضاءة خلفية','Rim Light':'إضاءة حافة',
  'Soft Diffused':'ناعم منتشر',
  // ── Color Grading ──
  'Warm Tones':'دافئة','Cool Tones':'باردة','Pastel Palette':'باستيل',
  'Neon Palette':'نيون','HDR Colors':'HDR','Duotone':'ثنائي اللون',
  'Vibrant / Saturated':'مشبع','Monochrome Red':'أحمر أحادي',
  'Monochrome Blue':'أزرق أحادي','Cyberpunk Colors':'سيبربانك',
  'Golden Hour Tones':'ذهبي','Earthy Tones':'ترابي',
  'Black & White':'أبيض وأسود','Vintage / Faded':'عتيق',
  'Muted / Desaturated':'مخفف','Flat Colors':'ألوان مسطحة',
  // ── Anime Studio ──
  'Studio Ghibli style':'ستوديو جيبلي','Makoto Shinkai style':'ماكوتو شينكاي',
  'Kyoto Animation style':'كيوتو أنيميشن','MAPPA style':'ماپا',
  'Ufotable style':'أوفوتيبل','Gainax style':'غاينكس','Madhouse style':'مادهاوس',
  'Trigger style':'تريغر','Sailor Moon style':'سيلور مون','Evangelion style':'إيفانغيليون',
  'Attack on Titan style':'تيتان','Naruto style':'ناروتو','Dragon Ball style':'دراغون بول',
  'Demon Slayer style':'قاتل الشياطين','Your Name style':'اسمك','Akira style':'أكيرا',
  // ── Shot Range ──
  'Extreme Closeup':'تقريب أقصى','Face Closeup':'تقريب الوجه','Headshot':'لقطة الرأس',
  'Bust Shot':'نصف الجسم','Waist Up':'من الخصر','Full Body':'جسم كامل',
  'Full Environment':'البيئة الكاملة','Macro':'ماكرو',
  'Nude Macro':'ماكرو عارية',
  // ── Camera Angle ──
  'Eye Level':'مستوى العين','Low Angle':'زاوية منخفضة','High Angle':'زاوية عالية',
  'Focus Face':'تركيز الوجه','Focus Body':'تركيز الجسم','Standard':'قياسي',
  'Crotch Shot':'لقطة سفلية','Panty Shot':'لقطة داخلية','Upskirt':'لقطة من أسفل',
  'Closeup Breasts':'تقريب صدر','Closeup Nipples':'تقريب حلمات',
  'Closeup Vagina':'تقريب أنثوي','Closeup Anus':'تقريب شرجي',
  'Closeup Penis':'تقريب ذكوري',
  // ── Looking Direction ──
  'At Viewer':'نحو المشاهد','Away':'بعيداً','Up':'للأعلى','Down':'للأسفل','To the Side':'للجانب',
  // ── Lens ──
  'Wide Angle':'زاوية واسعة','Telephoto':'تيليفوتو',
  '85mm Portrait':'٨٥مم بورتريه','Fisheye':'عين السمكة',
  'Soft Focus':'تركيز ناعم','Sharp Focus':'تركيز حاد','Depth of Field':'عمق الحقل',
  'Bokeh / Blurred BG':'بوكيه','Digital Camera':'كاميرا رقمية','Drone':'طائرة مسيّرة',
  // ── Weapons ──
  'Sword':'سيف','Katana':'كاتانا','Twin Blades':'شفرتان','Dagger':'خنجر','Axe':'فأس',
  'Spear':'رمح','Bow & Arrow':'قوس وسهم','Crossbow':'قاطع عرضي','Rifle':'بندقية',
  'Pistol':'مسدس','Sniper':'قناص','Machine Gun':'رشاش','Shotgun':'بندقية صيد',
  'Bazooka':'بازوكا','Grenade':'قنبلة يدوية','Magic Staff':'عصا سحرية',
  'Magic Wand':'عصا سحرية صغيرة','Scepter':'صولجان','Scythe':'منجل',
  'Shield':'درع','Rope':'حبل','Bomb':'قنبلة','Hammer':'مطرقة','Twin Blades':'شفرتان',
  // ── Props ──
  'Book':'كتاب','Scroll':'لفافة','Map':'خريطة','Compass':'بوصلة','Lantern':'فانوس',
  'Candle':'شمعة','Mirror':'مرآة','Potion Bottle':'زجاجة جرعة','Treasure Chest':'صندوق كنز',
  'Rose':'وردة','Lollipop':'مصاصة','Teddy Bear':'دمية دب','Fan':'مروحة',
  'Umbrella':'مظلة','Briefcase':'حقيبة عمل','Broom':'مكنسة',
  'Letter/Envelope':'رسالة / مظروف','Flag':'علم','Guitar':'غيتار',
  'Violin':'كمان','Microphone':'ميكروفون','Fishing Rod':'قضيب صيد',
  'Diaper (Baby)':'حفاضة','Female Diaper':'حفاضة أنثوية','Sanitary Pad':'فوطة صحية',
  'Sex Toy':'ألعاب','Dildo':'لعبة','Vibrator':'مدلك','Anal Plug':'سدادة',
  // ── Electronics ──
  'Smartphone':'هاتف ذكي','Laptop':'حاسوب محمول','Tablet':'لوح إلكتروني',
  'Gaming Controller':'يد تحكم','Smart Watch':'ساعة ذكية',
  'VR Headset':'نظارة VR','Camera':'كاميرا','TV Remote':'ريموت',
  // ── Negative Prompt ──
  'Bad Anatomy':'تشريح سيء','Deformed Hands':'أيدي مشوهة','Mutated Fingers':'أصابع طافرة',
  'Extra Fingers':'أصابع زائدة','Missing Fingers':'أصابع مفقودة','Extra Limbs':'أطراف زائدة',
  'Floating Limbs':'أطراف طائرة','Deformed Legs':'أرجل مشوهة','Missing Legs':'أرجل مفقودة',
  'Extra Legs':'أرجل زائدة','Bad Feet':'أقدام سيئة','Disconnected Body':'جسم منفصل',
  'Ugly Face':'وجه قبيح','Weird Proportions':'نسب غريبة','Duplicate Character':'شخصية مكررة',
  'Blurry':'ضبابي','Low Quality':'جودة منخفضة','JPEG Artifacts':'تشوهات JPEG',
  'Artifacts':'تشوهات','Noise/Grain':'ضوضاء / حبوب','Overexposed':'تعرض زائد',
  'Underexposed':'تعرض ناقص','Watermark/Text':'علامة مائية','Cropped':'مقطوع',
  'Out of Frame':'خارج الإطار','Washed Out':'باهت',
  'Missing Limbs':'أطراف مفقودة',
  // ── Clothing ──
  'Café':'مقهى','Medical Kit':'حقيبة طبية','Porcelain':'بشرة كالخزف',
  'Bare Legs':'أرجل مكشوفة','Bare Midriff':'بطن مكشوف',
  'Cleavage':'فتحة الصدر','Torn Clothes':'ملابس ممزقة',
  'Unbuttoned':'مفكوك الأزرار','Wet Clothes':'ملابس مبللة',
  // ── NSFW Body ──
  'Breasts':'نهود','Nipples':'حلمات','Visible Areolas':'هالات ظاهرة',
  'Pasties Only':'لاصقات فقط',
  'Penis (Male)':'عضو ذكري','Vagina':'عضو أنثوي','Anus':'فتحة خلفية',
  'Female Discharge':'إفرازات أنثوية',
  // ── NSFW Poses ──
  'Missionary':'وضعية ميشنري','Cowgirl':'وضعية كاوغيرل',
  'Reverse Cowgirl':'وضعية كاوغيرل معكوسة','Doggy Style':'وضعية دوغي',
  'Oral':'فموي','Anal':'شرجي','Gangbang':'جماعي','Glory Hole':'ثقب',
  // ── Camera Angles ──
  "Bird's Eye":'عين الطير','Side Profile':'بروفايل جانبي','Over Shoulder':'فوق الكتف',
};

const OPT_LABELS = { ar: OPT_AR };

/* ── Japanese UI strings ── */
UI.ja = {
  random:'ランダム', nsfw:'NSFW', saved:'保存済み',
  tab_style:'スタイル', tab_mood:'ムード', tab_scene:'シーン', tab_look:'外見', tab_outfit:'衣装',
  tab_camera:'カメラ', tab_quality:'品質', tab_character:'キャラ',
  tab_tools:'道具', tab_avoid:'除外',
  positive_prompt:'ポジティブ', negative_prompt:'ネガティブ',
  copy_full:'全コピー', copy_pos:'ポジティブ', copy_neg:'ネガティブ',
  save_fav:'お気に入り保存', saved_library:'保存ライブラリ', fav_empty:'保存済みなし',
  reset_all:'全リセット', footer_copy:'Anime Prompt Studio © 2026. All rights reserved.',
  clear:'クリア', clear_all:'全クリア',
  prompt_empty:'右側からオプションを選択してください…',
  neg_empty:'上で除外項目を選択するか、下に入力してください…',
  placeholder_pos:'＋ 追加ポジティブタグ — EnterまたはTab',
  placeholder_neg:'＋ 追加ネガティブタグ — EnterまたはTab',
  tags:' タグ',
  blueprint_ttl:'キャラクター設計図',
  prompt_strength:'プロンプト強度',
  color_themes:'カラーテーマ', help_info:'ヘルプ',
  about:'概要', features:'機能', tips:'ヒント',
  language:'言語',
  girls:'女の子', boys:'男の子', start_building:'今すぐ始める',
  sec_color_grading:'カラーグレーディング', sec_anime_studio:'スタジオ / 監督スタイル',
  sec_art_style:'アートスタイル', sec_era:'時代', sec_line_style:'線のスタイル',
  sec_shadows:'シャドウ', sec_glow:'グロー＆ブルーム', sec_skin_smooth:'肌の滑らかさ',
  sec_quality_tags:'クオリティタグ', sec_lighting:'ライティング',
  sec_characters:'シーンのキャラクター', sec_age:'年齢グループ',
  sec_skin_tone:'肌の色', sec_body:'体型', sec_hairstyle:'髪型',
  sec_hair_color1:'髪色（メイン）', sec_hair_color2:'グラデーション（サブ）',
  sec_eye_shape:'目の形', sec_eye_color:'目の色',
  sec_clothing:'服の種類', sec_clothing_acc:'服のアクセサリー',
  sec_sock_color:'靴下の色', sec_sock_length:'靴下の長さ',
  sec_footwear:'履き物', sec_face_acc:'顔のアクセサリー',
  sec_expression:'表情', sec_pose:'ポーズ＆アクション',
  sec_effects:'特殊効果', sec_liquids:'液体＆素材',
  sec_weapons:'武器', sec_props:'小道具', sec_electronics:'電子機器', sec_other:'その他',
  sec_environment:'環境', sec_mood:'ムード＆雰囲気',
  sec_shot_range:'ショット範囲', sec_camera_angle:'カメラアングル',
  sec_looking:'視線方向', sec_lens_type:'レンズタイプ',
  sec_lens_effect:'レンズ効果', sec_body_parts:'ボディフォーカス',
  sec_neg_prompt:'ネガティブ', sec_tools:'道具', sec_look:'外見', sec_outfit:'衣装',
  what_to_avoid:'除外項目',
  avoid_desc:'最終画像から除外したいものを選択してください。',
  neg_body_anatomy:'ボディ＆解剖', neg_image_quality:'画像品質',
  body_parts_note:'特定のボディパーツにカメラをフォーカス — NSFWモード限定。',
  bp_char:'キャラ', bp_age:'年齢', bp_skin:'肌・体型',
  bp_hair:'髪', bp_eyes:'目', bp_outfit:'衣装',
  bp_mood:'ムード', bp_tools:'道具', bp_scene:'シーン',
  bp_camera:'カメラ', bp_quality:'品質',
  about_p1:'Anime Prompt Studioは、AIイメージ生成のための詳細で高品質なプロンプトを作成するための無料ブラウザツールです。',
  about_p2:'アニメとイラストスタイルに特化して構築され、キャラクターの外見、衣装、ムード、シーン、ライティング、カメラなどを完全にコントロールできます。',
  about_p3:'アカウント不要。データ収集なし。すべてブラウザ内でローカルに動作します。',
  about_sig:'— MD.AI SYSTEMS が ✦ を込めて制作',
  feat_themes_t:'13カラーテーマ', feat_themes_d:'スタイルに合わせて変わるテーマUI',
  feat_char_t:'フルキャラクタービルダー', feat_char_d:'髪、目、肌、体型、衣装など',
  feat_cloth_t:'50+の服装オプション', feat_cloth_d:'カテゴリ別に整理されたトップス・ボトムス・フルアウトフィット',
  feat_studio_t:'アニメスタジオスタイル', feat_studio_d:'ジブリ、ufotable、MAPPA、新海誠など',
  feat_color_t:'カラーグレーディング', feat_color_d:'パステルからサイバーパンクまで16パレット',
  feat_cam_t:'カメラコントロール', feat_cam_d:'ショット範囲、角度、レンズタイプとフォーカス効果',
  feat_meter_t:'プロンプト強度メーター', feat_meter_d:'コンフリクト、過負荷、欠落要素を検出',
  feat_weight_t:'タグウェイトスライダー', feat_weight_d:'タグをクリックして影響力を調整',
  feat_favs_t:'お気に入りシステム', feat_favs_d:'最高のプロンプトを保存してリロード',
  feat_img_t:'画像アナライザー', feat_img_d:'画像からプロンプトを抽出・リバースエンジニアリング',
  feat_rand_t:'ランダマイザー', feat_rand_d:'ワンクリックでランダムキャラを生成',
  feat_nsfw_t:'NSFWモード', feat_nsfw_d:'年齢確認済みアダルトコンテンツ',
  tip1_t:'スタイルから始める', tip1_d:'まずアートスタイルまたはアニメスタジオを選ぶ — 最終的な見た目に最も影響するタグです。',
  tip2_t:'強度メーターを使う', tip2_d:'プロンプト強度スコアに注目。コンフリクト（赤）が品質を最も下げます。',
  tip3_t:'ライティングがすべて', tip3_d:'少なくとも1つのライティングタイプを追加。リムライト＋環境光でドラマチックな結果に。',
  tip4_t:'タグウェイトスライダー', tip4_d:'プロンプトボックスのタグをクリックしてウェイトスライダーを開く。スタイルやライティングは1.3以上に設定。',
  tip5_t:'クオリティタグが重要', tip5_d:'Masterpiece、Best Quality、Ultra Detailedを必ず3〜4個含めること。',
  tip6_t:'少ない方が多い', tip6_d:'3〜4種類のライティングや5個以上のエフェクトはモデルを混乱させます。オーバーロード警告が出たら注意。',
  tip7_t:'お気に入りを保存', tip7_d:'良い組み合わせが見つかったら♡ボタンで保存。いつでもお気に入りメニューからロードできます。',
  tip8_t:'追加タグを活用', tip8_d:'追加ポジティブタグフィールドはモデル固有のトークンや細かいディテールに最適です。',
  wlc_sub:'最高のAIイメージプロンプトビルダー — 無料・高速・アカウント不要。',
  wlc_about_title:'このプロジェクトについて',
  wlc_about_body:'Anime Prompt Studioは<span class="wlc-brand">MD.AI SYSTEMS</span>が情熱を持って制作したプロジェクトです。AIツールを誰もが使いやすく楽しめるようにすることを目指しています。ブラウザ内で完全に動作し、サーバーには何も保存されず、完全無料です。',
  wlc_footer:'アカウント不要 · データ収集なし · ブラウザで動作',
  wlc_feat1_t:'フルキャラクタービルダー', wlc_feat1_d:'髪、目、肌、体型、衣装など',
  wlc_feat2_t:'5カラーテーマ', wlc_feat2_d:'スタイルに合わせた完全テーマUI',
  wlc_feat3_t:'プロンプト強度メーター', wlc_feat3_d:'コンフリクトと欠落要素を検出',
  wlc_feat4_t:'お気に入りシステム', wlc_feat4_d:'最高の組み合わせを保存・リロード',
  wlc_feat5_t:'ワンクリックランダマイザー', wlc_feat5_d:'フルキャラを即時生成',
  wlc_feat6_t:'タグウェイトスライダー', wlc_feat6_d:'各タグの影響力を微調整',
  ag_title:'18歳以上限定', ag_subtitle:'NSFWコンテンツ警告',
  ag_body1:'このセクションには成人向けのコンテンツが含まれています。',
  ag_body2:'続行することで、以下を確認します：',
  ag_check1:'私は18歳以上です',
  ag_check2:'このコンテンツの使用について全責任を負います',
  ag_check3:'私の国または地域でこのコンテンツへのアクセスは合法です',
  ag_check4:'生成されたプロンプトを違法なコンテンツ作成に使用しません',
  ag_disclaimer:'このツールの作成者は、いかなる誤用、有害なコンテンツ生成、またはサードパーティプラットフォームの利用規約違反についても<strong>一切責任を負いません</strong>。このツールはテキストプロンプトのみを生成します。使用方法はお客様の責任です。',
  ag_no:'いいえ、18歳未満です', ag_yes:'はい、18歳以上です',
  ag_footer:'⚠️ 芸術的なプロンプト生成のみを目的としています',
};

/* ── Japanese option labels ── */
OPT_LABELS.ja = {
  // Characters
  '1 Girl':'女の子1人','1 Man':'男性1人','2 Girls':'女の子2人','2 Men':'男性2人',
  '1 Girl + 1 Man':'女の子と男性','3+ Girls':'女の子3人以上','3+ Men':'男性3人以上','Mixed Group':'混合グループ',
  // Age
  'Toddler (0–3)':'幼児(0〜3)','Child (4–8)':'子供(4〜8)','Preteen (9–12)':'小学生(9〜12)',
  'Teen (13–17)':'ティーン(13〜17)','Young Adult (18–25)':'若者(18〜25)',
  'Adult (26–35)':'成人(26〜35)','Middle-Aged (36–50)':'中年(36〜50)','Elderly (51+)':'高齢者(51+)',
  // Gender
  'Feminine':'女性的','Masculine':'男性的','Androgynous':'中性的',
  // Body
  'Petite':'小柄','Slim':'スリム','Athletic':'アスリート','Toned':'引き締まり','Curvy':'グラマー',
  'Hourglass':'砂時計型','Muscular':'筋肉質','Chubby':'ぽっちゃり','Tall':'高身長','Short':'低身長',
  // Skin
  'Porcelain':'磁器肌','White':'白肌','Pink':'ピンク肌','Normal':'普通',
  'Navy':'ネイビー','Black':'黒',
  // Hairstyle
  'Long Straight':'ロングストレート','Long Wavy':'ロングウェービー','Long Curly':'ロングカーリー',
  'Twin Tails':'ツインテール','High Ponytail':'ハイポニー','Side Ponytail':'サイドポニー',
  'Braid':'三つ編み','Double Braid':'ダブル三つ編み','Bun':'お団子','Messy Bun':'くしゃお団子',
  'Short Bob':'ショートボブ','Pixie Cut':'ピクシーカット','Hime Cut':'姫カット','Fluffy':'ふわふわ',
  'Wet Hair':'濡れ髪',
  // Eye Shape
  'Large Round':'大きな丸目','Almond':'アーモンド','Upturned':'上がり目','Downturned':'垂れ目',
  'Cat-like':'猫目','Doe Eyes':'鹿目','Hooded':'奥二重',
  // Expression
  'Happy':'嬉しい','Sad':'悲しい','Angry':'怒り','Shy':'恥ずかしい','Confident':'自信',
  'Gentle Smile':'穏やかな笑顔','Laughing':'笑い','Crying':'泣き','Scared':'怖い',
  'Stoic':'無表情','Seductive':'誘惑','Tired':'疲れ','Shocked':'驚き','Playful':'遊び心','Mysterious':'神秘的',
  'Dreamy':'夢見がち','Dramatic':'ドラマチック','Eyes Closed':'目を閉じて',
  // Clothing
  'T-Shirt':'Tシャツ','Crop Top':'クロップトップ','Tied Crop Top':'タイドクロップ','Off-Shoulder Top':'オフショルダー',
  'Tank Top':'タンクトップ','Tube Top':'チューブトップ','Sleeveless Top':'ノースリーブ',
  'Long Sleeve Shirt':'長袖シャツ','Button-Up Shirt':'ボタンシャツ','Oversized Shirt':'オーバーシャツ',
  'Graphic Tee':'グラフィックT','Polo Shirt':'ポロシャツ','Ribbed Top':'リブトップ','Halter Top':'ホルタートップ',
  'Hoodie':'パーカー','Zip-Up Hoodie':'ジップパーカー','Oversized Hoodie':'ビッグパーカー','Sweatshirt':'スウェット',
  'Jeans':'ジーンズ','Skinny Jeans':'スキニー','Wide-Leg Jeans':'ワイドジーンズ','Ripped Jeans':'ダメージジーンズ',
  'Shorts':'ショーツ','Denim Shorts':'デニムショーツ','Mini Shorts':'ミニショーツ',
  'High-Waist Shorts':'ハイウエストショーツ','Jogger Pants':'ジョガーパンツ','Sweatpants':'スウェットパンツ',
  'Cargo Pants':'カーゴパンツ','Leggings':'レギンス','Pleated Skirt':'プリーツスカート','Mini Skirt':'ミニスカート',
  'Plaid Skirt':'チェックスカート','Long Skirt':'ロングスカート','Denim Skirt':'デニムスカート',
  'School Uniform':'制服','Sailor Uniform':'セーラー服','Tracksuit':'ジャージ',
  'Casual Streetwear':'カジュアル','Sporty Outfit':'スポーツウェア','Sleepwear / Pajamas':'パジャマ',
  'Swimsuit':'水着','One-Piece Swimsuit':'ワンピース水着','Formal Suit':'フォーマルスーツ',
  'Blazer & Pants':'ブレザーとパンツ','Little Black Dress':'リトルブラックドレス',
  'Evening Gown':'イブニングドレス','Wedding Dress':'ウェディングドレス',
  'Magical Girl':'魔法少女','Maid Outfit':'メイド服','Gothic Lolita':'ゴシックロリータ',
  'Kimono':'着物','Yukata':'浴衣','Fantasy Armor':'ファンタジーアーマー','Ninja Outfit':'忍者衣装',
  'Military Uniform':'軍服',
  // Accessories
  'Ribbon Bow':'リボン','Belt':'ベルト','Choker':'チョーカー','Backpack':'バックパック',
  'Suspenders':'サスペンダー','Gloves':'グローブ','Scarf':'マフラー','Cape':'マント','Apron':'エプロン','Tie':'ネクタイ',
  'Glasses':'メガネ','Round Glasses':'丸メガネ','Sunglasses':'サングラス',
  'Flower Crown':'花冠','Headband':'ヘアバンド','Hair Clip':'ヘアクリップ',
  'Eye Patch':'眼帯','Mask':'マスク','Veil':'ベール','Halo':'光輪','Horns':'ツノ',
  'Crown':'王冠','Animal Ears':'けものミミ',
  // Footwear
  'Sneakers':'スニーカー','Boots':'ブーツ','Heels':'ヒール','Sandals':'サンダル',
  'Loafers':'ローファー','Barefoot':'裸足','Platform':'厚底','School Shoes':'上履き',
  // Sock
  'Thigh-High':'太もも丈','Over-Knee':'ひざ上','Knee-High':'ひざ丈','Ankle':'アンクル',
  // Pose
  'Standing':'立ち','Sitting':'座り','Kneeling':'ひざまずき','Crouching':'しゃがみ',
  'Lying Down':'寝転び','Running':'走り','Jumping':'ジャンプ','Dancing':'ダンス',
  'Fighting Stance':'戦闘ポーズ','Floating':'浮遊','Stretching':'ストレッチ',
  'Drinking':'飲み','Eating':'食べ','Reading':'読書','Sleeping':'睡眠',
  // Effects
  'Fire':'炎','Lightning':'稲妻','Ice Crystals':'氷の結晶','Electricity':'電気',
  'Smoke':'煙','Stars':'星','Sparkles':'キラキラ','Energy Orbs':'エネルギー球',
  'Particles':'パーティクル','Magical Aura':'魔法のオーラ','Magical Glow':'魔法の輝き',
  'Ethereal Glow':'幻想的な輝き','Cherry Blossoms':'桜','Water Splash':'水しぶき',
  'Dew Drops':'朝露','Golden Glow':'金色の輝き','Tears':'涙',
  'Sweat':'汗','Glistening':'輝き',
  // Environment
  'School':'学校','Rooftop':'屋上','City Street':'都市の通り','Night City':'夜の都市',
  'Beach':'ビーチ','Forest':'森','Mountains':'山','Desert':'砂漠','Space':'宇宙',
  'Fantasy Realm':'異世界','Onsen':'温泉','Café':'カフェ','Bedroom':'寝室',
  'Castle':'城','Cherry Blossom Park':'桜公園',
  // Art Style
  'Anime':'アニメ','Manga / Ink':'漫画／墨','Digital Painting':'デジタルペイント',
  'Watercolor':'水彩','Oil Painting':'油彩','Sketch / Pencil':'スケッチ／鉛筆',
  'Cel Shading':'セルシェーディング','Painterly':'絵画的','Concept Art':'コンセプトアート',
  'Flat Design':'フラットデザイン','Vector Art':'ベクターアート','Pixel Art':'ピクセルアート',
  '16-bit Pixel Art':'16bitピクセル','32-bit Pixel Art':'32bitピクセル',
  'Sprite Art':'スプライト','Voxel Art':'ボクセルアート','Low Poly':'ローポリ',
  'Fantasy Art':'ファンタジーアート','Cinematic':'シネマティック',
  // Studio
  'Studio Ghibli style':'スタジオジブリ風','Makoto Shinkai style':'新海誠風',
  'Kyoto Animation style':'京都アニメーション風','MAPPA style':'MAPPA風',
  'Ufotable style':'ufotable風','Trigger style':'トリガー風',
  'Demon Slayer style':'鬼滅の刃風','Attack on Titan style':'進撃の巨人風',
  'Gainax style':'ガイナックス風','Madhouse style':'マッドハウス風',
  'Naruto style':'ナルト風','Dragon Ball style':'ドラゴンボール風',
  'Sailor Moon style':'セーラームーン風','Evangelion style':'エヴァンゲリオン風',
  'Akira style':'AKIRA風','Your Name style':'君の名は風',
  // Era
  '1980s':'1980年代','1990s':'1990年代','2000s':'2000年代','2010s':'2010年代','2020s':'2020年代',
  'Retro 90s Anime':'レトロ90年代アニメ',
  // Line Style
  'Thin Lines':'細線','Medium Lines':'中線','Thick Lines':'太線',
  'Bold Lines':'極太線','Dark Ink':'濃い墨','No Outline':'輪郭なし','Soft Edges':'ソフトエッジ',
  // Shadows
  'No Shadows':'影なし','Soft Shadows':'柔らかい影','Medium Shadows':'中程度の影','Hard Shadows':'強い影',
  // Glow
  'No Glow':'グローなし','Soft Glow':'柔らかいグロー','Warm Glow':'暖かいグロー','Magical Glow':'魔法のグロー',
  // Skin Smooth
  'Normal':'普通','Smooth Skin':'なめらか肌','Silky':'シルキー','Sheer':'透け感','Textured':'テクスチャー',
  // Color Grading
  'Muted / Desaturated':'くすみカラー','Warm Tones':'ウォームトーン','Cool Tones':'クールトーン',
  'Pastel Palette':'パステル','Neon Palette':'ネオン','HDR Colors':'HDR','Duotone':'デュオトーン',
  'Vibrant / Saturated':'ビビッド','Monochrome Red':'赤モノクロ','Monochrome Blue':'青モノクロ',
  'Cyberpunk Colors':'サイバーパンク','Golden Hour Tones':'ゴールデンアワー','Earthy Tones':'アーシー',
  'Black & White':'白黒','Vintage / Faded':'ヴィンテージ',
  // Lighting
  'Natural Light':'自然光','Sunlight':'陽光','Golden Hour':'ゴールデンアワー',
  'Moonlight':'月明かり','Candlelight':'キャンドル光','Neon Light':'ネオン光',
  'Studio Light':'スタジオ光','Backlight':'バックライト','Rim Light':'リムライト',
  'Soft Diffused':'柔らかい拡散光','Dramatic':'ドラマチック',
  // Quality
  'Masterpiece':'傑作','Best Quality':'最高品質','Ultra Detailed':'超精細',
  'High Resolution':'高解像度','4K':'4K','8K':'8K','Award-Winning':'受賞作品',
  // Negative
  'Bad Anatomy':'解剖異常','Deformed Hands':'変形した手','Mutated Fingers':'変異した指',
  'Extra Fingers':'余分な指','Missing Fingers':'指の欠如','Extra Limbs':'余分な手足',
  'Floating Limbs':'浮遊する手足','Deformed Legs':'変形した脚','Missing Legs':'脚の欠如',
  'Extra Legs':'余分な脚','Bad Feet':'異常な足','Disconnected Body':'分離した体',
  'Ugly Face':'醜い顔','Weird Proportions':'変な比率','Duplicate Character':'重複キャラ',
  'Blurry':'ぼやけ','Low Quality':'低品質','JPEG Artifacts':'JPEGアーティファクト',
  'Artifacts':'アーティファクト','Noise/Grain':'ノイズ/グレイン','Overexposed':'露出過多',
  'Underexposed':'露出不足','Watermark/Text':'透かし','Cropped':'切り取り',
  'Out of Frame':'フレーム外','Flat Colors':'フラットカラー','Washed Out':'色褪せ',
  // Shot Range
  'Extreme Closeup':'超接写','Face Closeup':'顔接写','Headshot':'ヘッドショット',
  'Bust Shot':'バストショット','Waist Up':'ウエストアップ','Full Body':'全身',
  'Full Environment':'全景','Macro':'マクロ',
  // Camera
  'Eye Level':'目線','Low Angle':'ローアングル','High Angle':'ハイアングル',
  "Bird's Eye":'俯瞰','Side Profile':'横顔','Over Shoulder':'肩越し',
  'Focus Face':'顔フォーカス','Focus Body':'体フォーカス','Standard':'標準',
  // Looking
  'At Viewer':'視聴者へ','Away':'そっぽ','Up':'上','Down':'下','To the Side':'横',
  // Lens
  'Wide Angle':'広角','Telephoto':'望遠','85mm Portrait':'85mmポートレート','Fisheye':'魚眼',
  'Soft Focus':'ソフトフォーカス','Sharp Focus':'シャープフォーカス','Depth of Field':'被写界深度',
  'Bokeh / Blurred BG':'ボケ','Digital Camera':'デジカメ','Drone':'ドローン',
  // Weapons
  'Sword':'剣','Katana':'刀','Twin Blades':'双剣','Dagger':'短剣','Axe':'斧',
  'Spear':'槍','Bow & Arrow':'弓矢','Crossbow':'クロスボウ','Rifle':'ライフル',
  'Pistol':'ピストル','Sniper':'スナイパー','Machine Gun':'機関銃','Shotgun':'ショットガン',
  'Bazooka':'バズーカ','Grenade':'手榴弾','Magic Staff':'魔法の杖',
  'Magic Wand':'魔法の棒','Scepter':'王笏','Scythe':'鎌',
  'Shield':'盾','Rope':'縄','Bomb':'爆弾',
  // Props
  'Book':'本','Scroll':'巻物','Map':'地図','Compass':'コンパス','Lantern':'ランタン',
  'Candle':'ろうそく','Mirror':'鏡','Potion Bottle':'ポーション瓶','Treasure Chest':'宝箱',
  'Rose':'バラ','Lollipop':'ロリポップ','Teddy Bear':'テディベア','Fan':'扇子',
  'Umbrella':'傘','Briefcase':'ブリーフケース','Broom':'ほうき','Letter/Envelope':'手紙/封筒',
  'Flag':'旗','Guitar':'ギター','Violin':'バイオリン','Microphone':'マイク',
  // Electronics
  'Smartphone':'スマホ','Laptop':'ラップトップ','Tablet':'タブレット',
  'Gaming Controller':'ゲームコントローラー','Smart Watch':'スマートウォッチ','Headphones':'ヘッドフォン',
  'VR Headset':'VRヘッドセット','Camera':'カメラ','TV Remote':'リモコン',
  // Other
  'Medical Kit':'救急箱','Crown':'王冠','Trophy':'トロフィー',
  // Liquids/Materials
  'Rain-Soaked':'雨濡れ','Water Splash':'水しぶき','Body Oil':'ボディオイル',
  'Sweat Droplets':'汗の雫','Dripping':'滴り',
  // Hair/Eye Colors
  'White':'白','Silver':'銀','Blonde':'金髪','Gold':'ゴールド','Peach':'ピーチ',
  'Coral':'コーラル','Red':'赤','Auburn':'オーバーン','Pink':'ピンク','Magenta':'マゼンタ',
  'Purple':'紫','Violet':'バイオレット','Lavender':'ラベンダー','Indigo':'インディゴ',
  'Blue':'青','Cyan':'シアン','Teal':'ティール','Mint':'ミント','Emerald':'エメラルド',
  'Green':'緑','Jade':'翡翠','Brown':'茶','Amber':'琥珀','Grey':'グレー','Rainbow':'虹',
  'Sapphire':'サファイア',
  // Mood
  'Mysterious':'神秘的','Professional':'プロフェッショナル',
  // NSFW
  'Bare Legs':'素足','Bare Midriff':'へそ出し','Cleavage':'胸元','Torn Clothes':'破れた服',
  'Unbuttoned':'ボタン開け','Wet Clothes':'濡れた服',
  'Breasts':'胸','Nipples':'乳首','Visible Areolas':'乳輪','Pasties Only':'パスティーのみ',
  'Penis (Male)':'男性器','Vagina':'女性器','Anus':'肛門','Female Discharge':'女性の分泌物',
  'Missionary':'正常位','Cowgirl':'騎乗位','Reverse Cowgirl':'逆騎乗位','Doggy Style':'後背位',
  'Oral':'オーラル','Anal':'アナル','Gangbang':'乱交','Glory Hole':'グローリーホール',
  // Clothing items
  'Striped':'ストライプ',
};

/* ── Language detection: saved > device > EN default ── */
function detectLang(){
  const saved = localStorage.getItem('aps_lang');
  if(saved && UI[saved]) return saved;
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if(nav.startsWith('ar')) return 'ar';
  if(nav.startsWith('ja')) return 'ja';
  return 'en';
}
let _lang = detectLang();

function t(key){ return (UI[_lang]||UI.en)[key] || (UI.en)[key] || key; }
function optLabel(en){
  const map = OPT_LABELS[_lang];
  return map ? (map[en]||en) : en;
}



function applyLang(lang){
  _lang = lang;
  localStorage.setItem('aps_lang', lang);
  const isRtl = lang === 'ar';

  document.documentElement.setAttribute('lang', lang);

  // HTML-containing keys (use innerHTML not textContent)
  const htmlKeys = new Set(['wlc_about_body','ag_disclaimer']);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(!val) return;
    if(htmlKeys.has(key)) el.innerHTML = val;
    else el.textContent = val;
  });

  // Update placeholders
  const pi = document.getElementById('posTagInput');
  const ni = document.getElementById('negTagInput');
  if(pi) pi.placeholder = t('placeholder_pos');
  if(ni) ni.placeholder = t('placeholder_neg');

  // Update empty prompt states
  const pe = document.getElementById('promptText');
  const ne = document.getElementById('negativeText');
  if(pe && pe.classList.contains('empty')) pe.textContent = t('prompt_empty');
  if(ne && ne.classList.contains('empty')) ne.textContent = t('neg_empty');

  // Translate ALL option buttons (.ob, .cb) — skip color swatches
  document.querySelectorAll('.ob,.cb').forEach(btn => {
    if(btn.getAttribute('data-color')) return; // skip color swatches
    const en = btn.getAttribute('data-en');
    if(!en) return;
    const span = btn.querySelector('span');
    const translated = optLabel(en);
    if(span) span.textContent = translated;
    else btn.textContent = translated;
  });

  // Translate separator divs
  document.querySelectorAll('.og-sep').forEach(sep => {
    const en = sep.getAttribute('data-en') || sep.textContent;
    if(!sep.getAttribute('data-en')) sep.setAttribute('data-en', en);
    sep.textContent = optLabel(en);
  });

  // Translate Blueprint cell labels
  const bpMap = {
    'bp-char':'bp_char','bp-age':'bp_age','bp-skin':'bp_skin',
    'bp-hair':'bp_hair','bp-eyes':'bp_eyes','bp-outfit':'bp_outfit',
    'bp-mood':'bp_mood','bp-tools':'bp_tools','bp-scene':'bp_scene',
    'bp-camera':'bp_camera','bp-quality':'bp_quality'
  };
  Object.entries(bpMap).forEach(([id,key])=>{
    const el = document.getElementById(id);
    if(el){ const lbl=el.querySelector('.bp-lbl'); if(lbl) lbl.textContent=t(key); }
  });

  // Translate skin tone buttons (they use title attribute)
  document.querySelectorAll('.sb').forEach(btn => {
    const en = btn.getAttribute('data-en');
    if(!en) return;
    const span = btn.querySelector('span');
    const translated = optLabel(en);
    if(span) span.textContent = translated;
  });

  // Update flag button text (EN / AR label)
  document.getElementById('langFlag').textContent = LANG_FLAGS[lang]||'🌐';

  // Update active state
  document.querySelectorAll('.lang-opt').forEach(b=>{
    b.classList.toggle('on', b.dataset.lang===lang);
  });

  document.getElementById('langTray').classList.remove('open');
}

// Lang tray toggle
document.getElementById('langBtn').addEventListener('click', e=>{
  e.stopPropagation();
  document.getElementById('langTray').classList.toggle('open');
});
document.querySelectorAll('.lang-opt').forEach(b=>{
  b.addEventListener('click', ()=>applyLang(b.dataset.lang));
});
document.addEventListener('click', e=>{
  if(!e.target.closest('#langWrap')) document.getElementById('langTray').classList.remove('open');
});

initModal();
init();
// Re-apply lang after init() builds all buttons
applyLang(_lang);

// ── PROMPT OPTIMIZER ──────────────────────────────────────────
(function(){
  const btn    = document.getElementById('optimizerBtn');
  const input  = document.getElementById('optimizerInput');
  const output = document.getElementById('optimizerOutput');
  const status = document.getElementById('optimizerStatus');
  const insBtn = document.getElementById('optimizerInsertBtn');
  if(!btn) return;

  const SYSTEM = `You are an expert anime AI image prompt engineer specializing in models like NovelAI, Stable Diffusion (anime checkpoints), and ComfyUI anime pipelines.

Your task: Convert any user description (in any language) into a highly optimized, model-ready anime prompt.

Rules:
- Output ONLY the final prompt — no explanations, no labels, no markdown
- Use comma-separated English tags in the standard booru/danbooru tag format
- Start with quality boosters: masterpiece, best quality, ultra-detailed, highly detailed
- Include art style tags: anime style, 2d, illustration
- Translate and expand the user's description into relevant tags
- Add complementary tags that enhance the scene naturally
- End with technical quality tags: sharp focus, vibrant colors, intricate details
- Keep it under 120 words total
- Never include: realistic, photorealistic, 3d render`;

  btn.addEventListener('click', async () => {
    const text = input.value.trim();
    if(!text){ status.textContent = '⚠ اكتب وصفاً أولاً'; return; }

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحسين...';
    status.textContent = '';
    output.style.display = 'none';
    insBtn.style.display = 'none';

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 300,
          system: SYSTEM,
          messages: [{ role: 'user', content: text }]
        })
      });

      if(!res.ok) throw new Error(`API error ${res.status}`);
      const data = await res.json();
      const result = (data.content||[]).map(b=>b.text||'').join('').trim();

      output.textContent = result;
      output.style.display = 'block';
      insBtn.style.display = 'flex';
      status.textContent = '✓ تم';

      insBtn.onclick = () => {
        // Append optimized prompt to the extra/custom field if it exists, else show copied msg
        const extraField = document.getElementById('extraPos');
        if(extraField){
          extraField.value = (extraField.value ? extraField.value + ', ' : '') + result;
          extraField.dispatchEvent(new Event('input'));
          status.textContent = '✓ تمت الإضافة للبرومبت';
        } else {
          navigator.clipboard.writeText(result).then(()=>{ status.textContent = '✓ تم النسخ'; });
        }
      };

    } catch(e) {
      status.textContent = '✗ خطأ: ' + (e.message||'فشل الاتصال');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Optimize Prompt / تحسين';
    }
  });
})();

/* ═══════════════════════════════════
   FIREBASE AUTH + FIRESTORE SYNC
═══════════════════════════════════ */
(function initAuth(){
  // Wait for Firebase module to expose _fbAuth / _fbFavs
  let _attempts = 0;
  function tryInit(){
    if(!window._fbAuth || !window._fbFavs){
      if(++_attempts < 30){ setTimeout(tryInit, 200); }
      return;
    }
    setupAuth();
  }
  tryInit();

  function setupAuth(){
    const loginBtn   = document.getElementById('loginBtn');
    const authMenu   = document.getElementById('authMenu');
    const logoutBtn  = document.getElementById('logoutBtn');
    const authAvatar = document.getElementById('authAvatar');
    const authName   = document.getElementById('authName');
    const authEmail  = document.getElementById('authEmail');

    let _uid = null;
    let _menuOpen = false;

    let _firstAuthCall = true; // ignore first null call on page load

    // ── Auth state listener ──
    window._fbAuth.onAuth(user => {
      _uid = user ? user.uid : null;
      if(user){
        _firstAuthCall = false;
        // Show avatar button instead of login
        loginBtn.innerHTML = `<img src="${user.photoURL||''}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.6);" onerror="this.style.display='none'"><span>${user.displayName?.split(' ')[0]||'User'}</span>`;
        loginBtn.style.padding = '.28rem .65rem';
        authAvatar.src   = user.photoURL || '';
        authName.textContent  = user.displayName || '';
        authEmail.textContent = user.email || '';
        // Load favs from Firestore
        loadFavsFromCloud(_uid);
      } else {
        // Skip — page reload on logout handles cleanup
        if(_firstAuthCall){ _firstAuthCall = false; return; }
      }
    });

    // ── Login button ──
    loginBtn.addEventListener('click', async () => {
      if(_uid){
        // Toggle menu
        _menuOpen = !_menuOpen;
        authMenu.style.display = _menuOpen ? 'block' : 'none';
      } else {
        try {
          await window._fbAuth.signIn();
          toast('✅ Signed in successfully');
        } catch(e){
          if(e.code !== 'auth/popup-closed-by-user')
            toast('❌ Sign in failed: ' + e.message);
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', e => {
      if(_menuOpen && !e.target.closest('#authWrap')){
        authMenu.style.display = 'none';
        _menuOpen = false;
      }
    });

    // ── Logout ──
    logoutBtn.addEventListener('click', async () => {
      authMenu.style.display = 'none';
      _menuOpen = false;
      await window._fbAuth.signOut();
      localStorage.removeItem('aps6Favs');
      // Full page reload — clears all state and cache
      window.location.reload();
    });

  } // end setupAuth

  // ── Load favourites from Firestore → replace local ──
  async function loadFavsFromCloud(uid){
    try {
      const cloud = await window._fbFavs.load(uid);
      S.favourites = cloud;
      localStorage.setItem('aps6Favs', JSON.stringify(S.favourites));
      renderFavList();
      if(cloud.length) toast(`☁️ Loaded ${cloud.length} favourites`);
    } catch(e){
      console.warn('loadFavsFromCloud error:', e);
    }
  }

  // Expose current user globally
  if(window._fbAuth){
    window._fbAuth.onAuth(user => { window._currentUser = user || null; });
  }
})();
