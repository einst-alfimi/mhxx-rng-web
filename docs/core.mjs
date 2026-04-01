/*
 * Derived in part from apmnnn/mhxx-rng.
 * Original work Copyright (c) 2026 apmnnn, licensed under MIT.
 * HTML/JavaScript adaptation and additions Copyright (c) 2026 einst alfimi,
 * licensed under MIT. See ../LICENSE.
 */
export const INITIAL_SEED = [0x0194FD72, 0x79E6C985, 0x08DD9701, 0x41CFCE91];
export const SKILLS = [
  "毒　","麻痺","睡眠","気絶","聴覚","風圧","耐震","だる","耐暑","耐寒",
  "寒冷","炎熱","盗み","対防","狂撃","細菌","裂傷","攻撃","防御","体力",
  "火耐","水耐","雷耐","氷耐","龍耐","属耐","火攻","水攻","雷攻","氷攻",
  "龍攻","属攻","特攻","研師","匠　","斬味","剣術","研磨","鈍器","抜会",
  "抜減","納刀","納研","刃鱗","装速","反動","精密","通強","貫強","散強",
  "重強","通追","貫追","散追","榴追","拡追","毒追","麻追","睡追","強追",
  "属追","接追","減追","爆追","速射","射法","装数","変則","弾節","達人",
  "痛撃","連撃","特会","属会","会心","裏会","溜短","スタ","体術","気力",
  "走行","回性","回距","泡沫","ガ性","ガ強","ＫＯ","減攻","笛　","砲術",
  "重撃","爆弾","本気","闘魂","無傷","チャ","龍気","底力","逆境","逆上",

  "窮地","根性","気配","采配","号令","乗り","跳躍","無心","我慢","ＳＰ",
  "千里","観察","狩人","運搬","加護","英雄","回量","回速","効果","広域",
  "腹減","食い","食事","節食","肉食","茸食","野草","調成","調数","高速",
  "採取","ハチ","護石","気ま","運気","剥取","捕獲","ベル","ココ","ポッ",
  "ユク","龍識","飛行","紅兜","大雪","矛砕","岩穿","紫毒","宝纏","白疾",
  "隻眼","黒炎","金雷","荒鉤","燼滅","朧隠","鎧裂","天眼","青電","銀嶺",
  "鏖魔","真紅","真大","真矛","真岩","真紫","真宝","真白","真隻","真黒",
  "真金","真荒","真燼","真朧","真鎧","真天","真青","真銀","真鏖","北辰",
  "斬術","食欲","職工","剛腕","祈願","裏稼","刀匠","射手","状態","怒　",
  "回術","居合","頑強","剛撃","盾持","潔癖","増幅","護収","強欲","対鋼",

  "対霞","対炎","胴倍","秘術","護強",
];
export const ORIGINS = ["マカ", "炭鉱"];
export const KINDS = ["風化したお守り", "古びたお守り", "光るお守り", "なぞのお守り"];
export const EN_SKILLS = [
  "Poison","Paralysis","Sleep","Stun","Hearing","Wind Res","Tremor Res","Bind Res","Heat Res","Cold Res",
  "ColdBlooded","HotBlooded","Anti-Theft","Def Lock","Frenzy Res","Biology","Bleeding","Attack","Defense","Health",
  "Fire Res","Water Res","Thunder Res","Ice Res","Dragon Res","Blight Res","Fire Atk","Water Atk","Thunder Atk","Ice Atk",
  "Dragon Atk","Elemental","Status","Sharpener","Handicraft","Sharpness","Fencing","Grinder","Blunt","Crit Draw",
  "Punish Draw","Sheathing","Sheathe Sharpen","Bladescale","Reaload Spd","Recoil","Precision","Normal Up","Pierce Up","Pellet Up",
  "Heavy Up","Normal S+","Pierce S+","Pellet S+","Crag S+","Clust S+","Poison C+","Para C+","Sleep C+","Power C+",
  "Elem C+","C.Range C+","Exhaust C+","Blast C+","Rapid Fire","Dead Eye","Loading","Haphazard","Ammo Saver","Expert",
  "Tenderizer","Chain Crit","Crit Status","Crit Element","Critical Up","Negative Crit","FastCharge","Stamina","Constitution","Stam Recov",
  "Distance Runner","Evasion","Evade Dist","Bubble","Guard","Guard Up","KO","Stam Drain","Maestro","Artillery",
  "Destroyer","Bomb Boost","Gloves Off","Spirit","Unscathed","Chance","Dragon Spirit","Potential","Survivor","Furor",

  "Crisis","Guts","Sense","Team Player","TeamLeader","Mounting","Vault","Insight","Endurance","Prolong SP",
  "Psychic","Perception","Ranger","Transporter","Protection","Hero Shield","Rec Level","Rec Speed","Lasting Pwr","Wide-Range",
  "Hunger","Gluttony","Eating","Light Eater","Carnivore","Mycology","Botany","Combo Rate","Combo Plus","Speed Setup",
  "Gathering","Honey","Charmer","Whim","Fate","Carving","Capturer","Bherna","Kokoto","Pokke",
  "Yukumo","Soaratorium","Flying Pub","Redhelm","Snowbaron","Stonefist","Drilltusk","Dreadqueen","C.beard","Silverwind",
  "Deadeye","Dreadking","Thunderlord","Grimclaw","Hellblade","Nightcloak","Rustrazor","Soulseer","Boltreaver","Elderfrost",
  "Bloodbath","Redhelm X","Snowbaron X","Stonefist X","Drilltusk X","Dreadqueen X","Crystalbeard X","Silverwind X","Deadeye X","Dreadking X",
  "Thunderlord X","Grimclaw X","Hellblade X","Nightcloak X","Rustrazor X","Soulseer X","Boltreaver X","Elderfrost X","Bloodbath X","D. Fencing",
  "Edge Lore","PowerEater","Mechanic","Brawn","Prayer","Covert","Edgemaster","SteadyHand","Status Res","Fury",
  "Nimbleness","Readiness","Resilience","Brutality","Stalwart","Prudence","Amplify","Hoarding","Avarice","Anti-Kushala",

  "Anti-Chameleos","Anti-Teostra","Torso Up","Secret Arts","Talisman Boost",
];
export const ZH_SKILLS = [
  "毒","麻痹","睡眠","昏厥","听觉保护","风压","耐震","雪人","耐暑","耐寒",
  "适应寒冷","适应炎热","偷盗无效","对防御ＤＯＷＮ","狂击耐性","细菌学","裂伤","攻击","防御","体力",
  "火耐性","水耐性","雷耐性","冰耐性","龙耐性","属性耐性","火属性攻击","水属性攻击","雷属性攻击","冰属性攻击",
  "龙属性攻击","属性攻击","特殊攻击","磨刀匠","匠","锋利度","剑术","打磨术","钝器","拔刀会心",
  "拔刀减气","收刀","收刀打磨","刃鳞","装填速度","后坐力","精确射击","通常弹强化","贯穿弹强化","散弹强化",
  "重击弹强化","通常弹追加","贯穿弹追加","散弹追加","榴弹追加","扩散弹追加","毒瓶追加","麻痹瓶追加","睡眠瓶追加","强击瓶追加",
  "属强瓶追加","近战瓶追加","减气瓶追加","爆破瓶追加","速射","射法","装填数","不规则射击","弹药节约","达人",
  "痛击","连击","特殊会心","属性会心","会心强化","意外会心","快速蓄力","耐力","体术","耐力回复",
  "长跑","闪避性能","闪避距离","泡沫","格挡性能","格挡强化","ＫＯ","减气攻击","笛","炮术",
  "重击","爆弹强化","全力","斗魂","无伤","良机","龙气","潜力","逆境","暴怒",

  "绝境","毅力","气息","指挥","号令","骑乘","跳跃","无念","忍耐","ＳＰ持续",
  "千里眼","观察眼","猎手","搬运","加护","英雄之盾","回复量","回复速度","效果持续","广域",
  "饥饿","贪吃鬼","吃饭","节食","肉食","食菇","野草知识","调和成功率","调和数","高速设置",
  "采集","蜂蜜","护石王","反复无常","运气","剥取","捕获","贝鲁纳","可可特","波凯",
  "结云","龙识船","飞行酒吧","红盔","大雪主","矛碎","岩穿","紫毒姬","宝缠","白疾风",
  "独眼","黑炎王","金雷公","荒钩爪","烬灭刃","胧隐","铠裂","天眼","青电主","银峰",
  "鏖魔","真・红盔","真・大雪主","真・矛碎","真・岩穿","真・紫毒姬","真・宝缠","真・白疾风","真・独眼","真・黑炎王",
  "真・金雷公","真・荒钩爪","真・烬灭刃","真・胧隐","真・铠裂","真・天眼","真・青电主","真・银峰","真・鏖魔","北辰纳豆流",
  "斩术","食欲","工人","铁臂","祈愿","掩人耳目","刀匠","射手","状态耐性","怒",
  "闪避术","居合斩","顽强","刚击","据盾","洁癖","增幅","护石收集","贪婪","抵御钢龙",

  "抵御霞龙","抵御炎龙","身体系统加倍","秘术","护石强化",
];
export const EN_ORIGINS = ["Melding", "Quest"];
export const ZH_ORIGINS = ["炼金", "任务"];
export const EN_KINDS = ["Enduring Charm", "Timeworn Charm", "Shining Charm", "Mystery Charm"];
export const ZH_KINDS = ["风化护符", "陈旧护符", "发光护符", "谜之护符"];
export const LOCALES = {
  ja: { skills: SKILLS, origins: ORIGINS, kinds: KINDS },
  en: { skills: EN_SKILLS, origins: EN_ORIGINS, kinds: EN_KINDS },
  zh: { skills: ZH_SKILLS, origins: ZH_ORIGINS, kinds: ZH_KINDS },
};

const KIND_CONFIGS = [
  {
    skill1: [
      4,5,10,11,14,15,25,31,32,35,
      36,37,38,39,40,41,42,44,45,47,
      48,49,50,64,65,66,68,70,71,72,
      73,76,77,78,79,80,81,82,83,84,
      85,86,87,90,92,93,94,95,97,99,
      100,101,106,107,108,109,114,115,116,122,
      123,132,
    ],
    sp1: [
      [3,7],[5,10],[3,7],[3,7],[3,7],[5,10],[3,7],[3,7],[3,7],[3,7],
      [3,7],[1,5],[2,6],[1,5],[1,5],[5,10],[5,10],[3,7],[2,6],[2,6],
      [2,6],[2,6],[2,6],[1,5],[1,5],[1,5],[3,7],[2,6],[1,5],[2,6],
      [2,6],[2,6],[2,6],[3,7],[3,7],[2,6],[2,6],[2,6],[1,5],[3,7],
      [3,7],[5,10],[5,10],[2,6],[2,6],[1,5],[1,5],[1,5],[2,6],[2,6],
      [2,6],[1,5],[2,6],[1,5],[3,7],[3,7],[3,7],[1,5],[3,7],[2,6],
      [3,7],[3,7],
    ],
    skill2: [
      4,5,17,18,25,26,27,28,29,30,
      32,33,34,35,36,37,39,40,41,43,
      44,45,47,48,49,50,64,65,66,68,
      69,70,71,74,75,76,77,78,79,80,
      81,82,83,84,85,86,87,88,89,90,
      91,92,93,94,95,96,97,99,100,101,
      105,106,107,108,109,114,115,116,119,122,
      123,125,132,134,135,136,161,162,163,164,
      165,166,167,168,169,170,171,172,173,174,
      175,176,177,178,
    ],
    sp2: [
      [3,5],[5,7],[7,10],[5,13],[5,7],[5,13],[5,13],[5,13],[5,13],[5,13],
      [5,7],[7,10],[3,5],[5,7],[5,7],[3,5],[5,5],[2,8],[5,7],[3,3],
      [5,7],[5,7],[3,5],[3,5],[3,5],[3,5],[3,5],[3,5],[3,5],[5,7],
      [7,10],[3,5],[1,3],[3,5],[3,3],[3,5],[3,5],[3,5],[3,5],[3,5],
      [3,5],[3,5],[1,3],[3,5],[3,5],[7,10],[7,10],[5,10],[5,10],[3,5],
      [5,10],[3,5],[1,3],[1,3],[1,3],[3,3],[3,5],[3,5],[3,5],[1,3],
      [7,10],[3,5],[1,3],[5,7],[5,7],[7,10],[1,3],[3,5],[5,12],[3,5],
      [5,7],[3,5],[7,10],[5,7],[3,5],[5,7],[3,3],[3,3],[3,3],[3,3],
      [3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],
      [3,3],[3,3],[3,3],[3,3],
    ],
    slotvalue: [
      [100,100,100],[3,53,88],[5,55,89],[7,57,89],[13,58,89],
      [16,60,90],[22,62,90],[30,66,90],[38,68,91],[50,72,91],
      [55,75,92],[59,77,92],[64,81,94],[67,83,94],[71,86,96],
      [74,88,96],[79,91,98],[82,92,98],[86,94,99],[90,96,99],
    ],
    th: 15,
    kind: 0,
  },
  {
    skill1: [
      4,5,10,11,14,15,25,26,27,28,
      29,30,31,32,35,36,38,41,42,44,
      45,47,48,49,50,65,68,70,72,73,
      76,77,78,79,81,82,84,85,86,87,
      90,92,97,99,100,103,104,106,108,109,
      114,116,122,123,124,132,
    ],
    sp1: [
      [1,5],[1,5],[1,5],[1,5],[1,5],[1,8],[1,5],[1,7],[1,7],[1,7],
      [1,7],[1,7],[1,5],[1,6],[1,5],[1,5],[1,6],[1,6],[1,6],[1,6],
      [1,5],[1,5],[1,5],[1,5],[1,5],[1,3],[1,5],[1,5],[1,5],[1,5],
      [1,5],[1,5],[1,6],[1,6],[1,6],[1,6],[1,6],[1,6],[1,6],[1,6],
      [1,5],[1,6],[1,6],[1,5],[1,5],[1,7],[1,7],[1,5],[1,5],[1,6],
      [1,7],[1,6],[1,5],[1,5],[1,5],[1,7],
    ],
    skill2: [
      3,4,5,17,18,19,20,21,22,23,
      24,25,26,27,28,29,30,32,33,34,
      35,36,37,39,40,41,42,44,45,47,
      48,49,50,64,65,66,68,69,70,71,
      74,76,77,78,79,80,81,82,83,84,
      85,86,87,88,89,90,91,92,93,94,
      95,97,99,100,101,103,104,105,106,107,
      108,109,110,114,115,116,117,119,120,122,
      123,124,125,132,134,135,136,143,144,145,
      146,147,148,149,150,151,152,153,154,155,
      156,157,158,159,160,
    ],
    sp2: [
      [10,13],[3,3],[10,3],[10,10],[10,10],[10,13],[10,13],[10,13],[10,13],[10,13],
      [10,13],[3,3],[10,13],[10,13],[10,13],[10,13],[10,13],[10,4],[10,8],[5,5],
      [3,3],[3,3],[3,3],[3,3],[5,8],[10,4],[3,3],[3,4],[3,3],[3,3],
      [3,3],[3,3],[3,3],[3,3],[5,5],[3,3],[5,5],[10,10],[3,3],[3,3],
      [3,3],[3,3],[3,3],[3,4],[3,4],[5,5],[3,4],[3,4],[3,3],[3,4],
      [3,4],[3,4],[3,4],[10,10],[10,10],[3,3],[10,10],[3,4],[3,3],[3,3],
      [3,3],[3,4],[5,5],[5,5],[3,3],[10,10],[10,10],[5,5],[5,5],[3,3],
      [5,5],[3,3],[10,12],[10,9],[3,3],[3,4],[10,12],[10,12],[10,10],[3,3],
      [5,5],[5,5],[3,3],[8,10],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],
      [3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],
      [3,3],[3,3],[3,3],[3,3],[3,3],
    ],
    slotvalue: [
      [8,58,88],[9,59,88],[16,61,89],[17,62,89],[23,63,89],
      [25,65,90],[31,66,90],[38,68,90],[45,71,91],[58,76,91],
      [63,79,92],[66,80,92],[71,83,94],[74,84,94],[78,87,96],
      [82,90,96],[86,93,98],[88,94,98],[91,96,99],[94,97,99],
    ],
    th: 25,
    kind: 1,
  },
  {
    skill1: [
      0,1,2,3,5,6,7,13,17,18,
      19,20,21,22,23,24,26,27,28,29,
      30,32,33,38,41,44,46,51,52,53,
      54,55,62,63,68,69,72,73,78,79,
      81,84,85,86,87,88,89,91,97,98,
      99,100,103,104,106,108,109,110,113,114,
      116,117,119,120,122,123,124,126,129,131,
      132,
    ],
    sp1: [
      [1,5],[1,5],[1,5],[1,8],[1,4],[1,7],[1,7],[1,7],[1,4],[1,4],
      [1,8],[1,6],[1,6],[1,6],[1,6],[1,6],[1,7],[1,7],[1,7],[1,7],
      [1,7],[1,4],[1,4],[1,4],[1,6],[1,4],[1,6],[1,6],[1,10],[1,10],
      [1,10],[1,10],[1,10],[1,10],[1,3],[1,4],[1,3],[1,3],[1,6],[1,6],
      [1,6],[1,6],[1,4],[1,6],[1,6],[1,6],[1,6],[1,6],[1,6],[1,5],
      [1,3],[1,3],[1,5],[1,5],[1,3],[1,3],[1,6],[1,8],[1,8],[1,7],
      [1,6],[1,7],[1,8],[1,8],[1,4],[1,3],[1,3],[1,8],[1,8],[1,8],
      [1,3],
    ],
    skill2: [
      0,1,2,3,6,7,8,9,12,13,
      14,15,16,17,18,19,20,21,22,23,
      24,32,40,46,51,52,53,54,55,56,
      57,58,59,60,61,62,63,65,67,68,
      69,72,73,88,89,91,98,99,100,102,
      103,104,105,106,108,110,111,112,113,117,
      118,119,120,121,123,124,126,127,128,129,
      130,131,132,133,
    ],
    sp2: [
      [10,7],[10,7],[10,7],[10,10],[10,8],[10,8],[10,10],[10,10],[10,10],[10,8],
      [5,5],[5,5],[10,10],[7,7],[7,7],[10,10],[10,10],[10,10],[10,10],[10,10],
      [10,10],[4,4],[5,5],[10,10],[8,8],[10,10],[10,10],[10,10],[10,10],[10,10],
      [10,10],[10,10],[10,12],[10,12],[10,10],[10,10],[10,10],[3,3],[10,10],[5,5],
      [7,7],[5,5],[5,5],[8,8],[8,8],[8,8],[5,5],[5,5],[5,5],[10,10],
      [7,7],[7,7],[8,8],[5,5],[5,5],[10,10],[10,10],[10,10],[10,10],[4,4],
      [10,10],[10,10],[10,10],[10,13],[5,5],[5,5],[10,10],[10,13],[10,10],[10,10],
      [10,13],[10,10],[5,5],[10,13],
    ],
    slotvalue: [
      [2,72,100],[9,74,100],[16,76,100],[23,78,100],[30,80,100],
      [37,82,100],[44,84,100],[51,86,100],[58,88,100],[75,90,100],
      [83,92,100],[87,95,100],[90,97,100],[92,98,100],[94,99,100],
      [95,99,100],[97,100,100],[98,100,100],[99,100,100],[99,100,100],
    ],
    th: 35,
    kind: 2,
  },
  {
    skill1: [
      0,1,2,3,6,7,8,9,12,13,
      14,16,17,18,19,20,21,22,23,24,
      46,51,52,53,54,55,56,57,58,59,
      60,61,62,63,67,69,88,89,91,98,
      102,103,104,105,110,111,112,113,118,119,
      120,121,126,127,128,129,130,131,133,
    ],
    sp1: [
      [1,5],[1,5],[1,5],[1,8],[1,7],[1,7],[1,10],[1,10],[1,10],[1,7],
      [1,3],[1,5],[1,4],[1,4],[1,8],[1,6],[1,6],[1,6],[1,6],[1,6],
      [1,6],[1,8],[1,8],[1,8],[1,8],[1,8],[1,8],[1,8],[1,8],[1,8],
      [1,8],[1,8],[1,8],[1,8],[1,5],[1,4],[1,6],[1,6],[1,6],[1,4],
      [1,8],[1,3],[1,3],[1,10],[1,8],[1,8],[1,8],[1,8],[1,8],[1,8],
      [1,8],[1,10],[1,8],[1,10],[1,8],[1,8],[1,10],[1,8],[1,10],
    ],
    skill2: [0],
    sp2: [[10,7]],
    slotvalue: [
      [55,100,100],[60,100,100],[65,100,100],[70,100,100],[75,100,100],
      [80,100,100],[85,100,100],[90,100,100],[95,100,100],[99,100,100],
      [100,100,100],[100,100,100],[100,100,100],[100,100,100],[100,100,100],
      [100,100,100],[100,100,100],[100,100,100],[100,100,100],[100,100,100],
    ],
    th: 100,
    kind: 3,
  },
];

const POLY_MODULUS = 0x100000201a8362f671442057eea368001n;
const POLY_PERIOD = (1n << 128n) - 1n;

function u32(value) {
  return value >>> 0;
}

function createState() {
  return {
    x: INITIAL_SEED[0],
    y: INITIAL_SEED[1],
    z: INITIAL_SEED[2],
    w: INITIAL_SEED[3],
    t: 0,
    f: 0,
    r0: 0,
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    r5: 0,
    r6: 0,
  };
}

function resetState(state) {
  state.x = INITIAL_SEED[0];
  state.y = INITIAL_SEED[1];
  state.z = INITIAL_SEED[2];
  state.w = INITIAL_SEED[3];
  state.t = 0;
  state.f = 0;
  state.r0 = 0;
  state.r1 = 0;
  state.r2 = 0;
  state.r3 = 0;
  state.r4 = 0;
  state.r5 = 0;
  state.r6 = 0;
}

function ascend(state) {
  const t = u32(state.x ^ (state.x << 15));
  state.x = state.y;
  state.y = state.z;
  state.z = state.w;
  state.w = u32(state.w ^ (state.w >>> 21) ^ t ^ (t >>> 4));
  state.t = t;
  state.f += 1;
}

function roll(state) {
  state.r0 = state.r1;
  state.r1 = state.r2;
  state.r2 = state.r3;
  state.r3 = state.r4;
  state.r4 = state.r5;
  state.r5 = state.r6;
  state.r6 = state.w;
  ascend(state);
}

function seedSearchState(state) {
  resetState(state);
  for (let i = 0; i < 7; i += 1) {
    roll(state);
  }
}

function polyMul(p1, p2) {
  let res = 0n;
  let a = p1;
  let b = p2;

  while (b > 0n) {
    if (b & 1n) {
      res ^= a;
    }
    a <<= 1n;
    b >>= 1n;
  }

  return res;
}

function bitLength(value) {
  return value === 0n ? 0 : value.toString(2).length;
}

function polyMod(p, m) {
  const mLen = bitLength(m);
  let value = p;

  while (true) {
    const delta = bitLength(value) - mLen;
    if (delta < 0) {
      return value;
    }
    value ^= m << BigInt(delta);
  }
}

function polyPowMod(base, exp, mod) {
  let res = 1n;
  let value = polyMod(base, mod);
  let power = exp;

  while (power > 0n) {
    if (power & 1n) {
      res = polyMod(polyMul(res, value), mod);
    }
    value = polyMod(polyMul(value, value), mod);
    power >>= 1n;
  }

  return res;
}

function jump(state, frame) {
  if (frame === 0) {
    seedSearchState(state);
    return;
  }

  resetState(state);

  let rPoly = polyPowMod(0b10n, BigInt(frame) % POLY_PERIOD, POLY_MODULUS);
  let sx = 0;
  let sy = 0;
  let sz = 0;
  let sw = 0;

  while (rPoly > 0n) {
    if (rPoly & 1n) {
      sx = u32(sx ^ state.x);
      sy = u32(sy ^ state.y);
      sz = u32(sz ^ state.z);
      sw = u32(sw ^ state.w);
    }
    rPoly >>= 1n;
    ascend(state);
  }

  state.x = sx;
  state.y = sy;
  state.z = sz;
  state.w = sw;
  state.f = frame;
  state.r0 = 0;
  state.r1 = 0;
  state.r2 = 0;
  state.r3 = 0;
  state.r4 = 0;
  state.r5 = 0;
  state.r6 = 0;

  for (let i = 0; i < 7; i += 1) {
    roll(state);
  }
}

function slot(fill, randValue, slotvalue) {
  if (fill <= 0) {
    return 0;
  }
  const thresholds = slotvalue[fill - 1];
  if (randValue >= thresholds[2]) {
    return 3;
  }
  if (randValue >= thresholds[1]) {
    return 2;
  }
  if (randValue >= thresholds[0]) {
    return 1;
  }
  return 0;
}

function rare(slotCount, fill, kindIndex) {
  const value = slotCount * 2 + fill;
  switch (kindIndex) {
    case 0:
      return value >= 13 ? 10 : value >= 8 ? 9 : 8;
    case 1:
      return value >= 13 ? 7 : value >= 8 ? 6 : 5;
    case 2:
      return value >= 8 ? 4 : 3;
    case 3:
      return value >= 8 ? 2 : 1;
    default:
      return 0;
  }
}

function getCharmData(state, config, originIndex) {
  const id1 = state.r0 % config.skill1.length;
  const id2 = state.r3 % config.skill2.length;
  const s1 = config.sp1[id1][1];
  const s2 = config.sp2[id2][1];
  const skill1Id = config.skill1[id1];
  const skill2Id = config.skill2[id2];
  const sp1 = (state.r1 % (config.sp1[id1][1] - config.sp1[id1][0] + 1)) + config.sp1[id1][0];

  let hasSkill2 = false;
  let displaySp2 = 0;
  let effectiveSp2 = 0;
  let q5 = state.r3;

  if (state.r2 % 100 >= config.th) {
    hasSkill2 = true;

    if (originIndex === 1 && state.r4 % 2 === 0) {
      q5 = state.r6;
      displaySp2 = (state.r5 % (config.sp2[id2][0] + 1)) - config.sp2[id2][0];
    } else {
      q5 = originIndex === 1 ? state.r6 : state.r5;
      const q4 = originIndex === 1 ? state.r5 : state.r4;
      displaySp2 = (q4 % config.sp2[id2][1]) + 1;
    }

    effectiveSp2 = displaySp2;
    if (skill1Id === skill2Id || displaySp2 < 0) {
      effectiveSp2 = 0;
    }
  }

  const fill = Math.floor((sp1 * s2 + effectiveSp2 * s1) * 10 / (s1 * s2));
  const slotCount = slot(fill, q5 % 100, config.slotvalue);

  return {
    skill1Id,
    skill2Id,
    sp1,
    sp2: hasSkill2 ? displaySp2 : 0,
    slot: slotCount,
    fill,
    slotRand: q5 % 100,
    rare: rare(slotCount, fill, config.kind),
    hasSkill2,
  };
}

function getCharm(state, config, originIndex) {
  const data = getCharmData(state, config, originIndex);
  return {
    skill1Id: data.skill1Id,
    sp1: data.sp1,
    skill2Id: data.hasSkill2 ? data.skill2Id : null,
    sp2: data.sp2,
    slot: data.slot,
    fill: data.fill,
    slotRand: data.slotRand,
    rare: data.rare,
  };
}

function maybeMatchCharm(state, config, query, mode) {
  const data = getCharmData(state, config, query.originIndex);

  if (mode === "greater") {
    return data.sp1 >= query.sp1 && data.sp2 >= query.sp2 && data.slot >= query.slot ? data : null;
  }

  return data.sp1 === query.sp1 && data.sp2 === query.sp2 && data.slot === query.slot ? data : null;
}

export function getKindConfig(kindIndex) {
  return KIND_CONFIGS[kindIndex];
}

export function getLocaleData(localeCode = "ja") {
  return LOCALES[localeCode] ?? LOCALES.ja;
}

export function getKindLabels(localeCode = "ja") {
  return getLocaleData(localeCode).kinds;
}

export function getOriginLabels(localeCode = "ja") {
  return getLocaleData(localeCode).origins;
}

export function getSkillOptions(kindIndex, localeCode = "ja") {
  const config = getKindConfig(kindIndex);
  const locale = getLocaleData(localeCode);

  return {
    skill1: config.skill1.map((skillId, index) => ({
      skillId,
      name: locale.skills[skillId],
      min: config.sp1[index][0],
      max: config.sp1[index][1],
    })),
    skill2: config.skill2.map((skillId, index) => ({
      skillId,
      name: locale.skills[skillId],
      min: config.sp2[index][0],
      max: config.sp2[index][1],
    })),
  };
}

export function getPointOptions(kindIndex, originIndex, skillIndex, which) {
  const config = getKindConfig(kindIndex);
  const values = [];

  if (which === 1) {
    const [min, max] = config.sp1[skillIndex];
    for (let value = min; value <= max; value += 1) {
      values.push(value);
    }
    return values;
  }

  const [negativeMax, positiveMax] = config.sp2[skillIndex];

  if (originIndex === 0) {
    for (let value = 1; value <= positiveMax; value += 1) {
      values.push(value);
    }
    return values;
  }

  for (let value = -negativeMax; value <= positiveMax; value += 1) {
    values.push(value);
  }

  return values;
}

export function formatFrame(frame) {
  const days = Math.floor(frame / 2592000);
  const hours = Math.floor((frame % 2592000) / 108000);
  const minutes = Math.floor((frame % 108000) / 1800);
  const seconds = Math.floor((frame % 1800) / 30);
  const frames = frame % 30;
  return `${days}d ${hours}h ${minutes}m ${seconds}s ${frames}f`;
}

export function buildQueryFromIndexes(kindIndex, originIndex, skill1Index, sp1, skill2Index, sp2, slotCount) {
  const config = getKindConfig(kindIndex);

  if (skill1Index < 0 || skill1Index >= config.skill1.length) {
    throw new Error("Invalid first skill index.");
  }
  if (skill2Index < 0 || skill2Index >= config.skill2.length) {
    throw new Error("Invalid second skill index.");
  }

  return {
    kindIndex,
    originIndex,
    id1: skill1Index,
    sp1,
    id2: skill2Index,
    sp2,
    slot: slotCount,
    len1: config.skill1.length,
    len2: config.skill2.length,
  };
}

export function buildQuery(kindIndex, originIndex, skill1Name, sp1, skill2Name, sp2, slotCount) {
  const config = getKindConfig(kindIndex);
  const skill1Id = SKILLS.indexOf(skill1Name);
  const skill2Id = SKILLS.indexOf(skill2Name);
  const id1 = config.skill1.indexOf(skill1Id);
  const id2 = config.skill2.indexOf(skill2Id);

  if (id1 < 0) {
    throw new Error(`第1スキル「${skill1Name}」は ${KINDS[kindIndex]} に存在しません。`);
  }
  if (id2 < 0) {
    throw new Error(`第2スキル「${skill2Name}」は ${KINDS[kindIndex]} に存在しません。`);
  }

  return {
    kindIndex,
    originIndex,
    id1,
    sp1,
    id2,
    sp2,
    slot: slotCount,
    len1: config.skill1.length,
    len2: config.skill2.length,
  };
}

function toCharmResult(match) {
  return {
    skill1Id: match.skill1Id,
    sp1: match.sp1,
    skill2Id: match.hasSkill2 ? match.skill2Id : null,
    sp2: match.sp2,
    slot: match.slot,
    fill: match.fill,
    slotRand: match.slotRand,
    rare: match.rare,
  };
}

function searchInternal(query, limit, mode, options = {}) {
  const state = createState();
  const config = getKindConfig(query.kindIndex);
  const results = [];
  const { id1, id2, len1, len2 } = query;
  const { onProgress = null, progressInterval = 50000 } = options;
  let nextProgress = progressInterval;

  seedSearchState(state);

  for (let i = 0; i < limit; i += 1) {
    roll(state);

    if (
      state.r0 % len1 === id1 &&
      state.r2 % 100 >= config.th &&
      state.r3 % len2 === id2
    ) {
      const match = maybeMatchCharm(state, config, query, mode);
      if (match) {
        const frame = state.f - 7;
        results.push({
          frame,
          watch: formatFrame(frame),
          charm: toCharmResult(match),
        });
      }
    }

    if (onProgress && i + 1 >= nextProgress) {
      onProgress(i + 1, limit);
      nextProgress += progressInterval;
    }
  }

  if (onProgress) {
    onProgress(limit, limit);
  }

  return results;
}

export function searchExact(query, limit, options) {
  return searchInternal(query, limit, "exact", options);
}

export function searchGreater(query, limit, options) {
  return searchInternal(query, limit, "greater", options);
}

export function listAround(kindIndex, originIndex, frame, radius) {
  const state = createState();
  const config = getKindConfig(kindIndex);
  const startFrame = Math.max(0, frame - radius);
  const count = frame - startFrame + radius + 1;
  const rows = [];

  jump(state, startFrame);

  for (let i = 0; i < count; i += 1) {
    const currentFrame = state.f - 7;
    rows.push({
      offset: currentFrame - frame,
      frame: currentFrame,
      charm: getCharm(state, config, originIndex),
    });
    roll(state);
  }

  return rows;
}

export function describeCharm(charm, localeCode = "ja") {
  const locale = getLocaleData(localeCode);
  const skill1Name = locale.skills[charm.skill1Id];
  const skill2Text = charm.skill2Id === null ? (localeCode === "ja" ? "なし" : localeCode === "zh" ? "无" : "None") : `${locale.skills[charm.skill2Id]} ${charm.sp2}`;
  return `${skill1Name} ${charm.sp1} / ${skill2Text} / S${charm.slot} / RARE${charm.rare}`;
}
