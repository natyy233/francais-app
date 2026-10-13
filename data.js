/* =====================================================================
 * 法语入门每日一课 · 课程数据库（data.js）
 * 内容基于法语 A1 教学大纲常用词汇与句式（参考《你好！法语》《Édito A1》等教材常用表达）
 * 结构：
 *   COURSES   : 6 节基础课程，每节 30 词 + 10 短句 + 5 长句
 *   ARTICLES  : 学完课程后推送的简短法语文章（带逐句翻译）
 * ===================================================================== */
window.COURSES = [
  /* ---------- 第 1 课：问候与自我介绍 ---------- */
  {
    day: 1,
    title: "问候与自我介绍",
    focus: "打招呼、告别与自我表达",
    words: [
      ["bonjour", "你好/日安"], ["bonsoir", "晚上好"], ["salut", "嗨（非正式）"], ["au revoir", "再见"],
      ["merci", "谢谢"], ["pardon", "对不起"], ["s'il vous plaît", "请（正式）"], ["oui", "是"],
      ["non", "不"], ["monsieur", "先生"], ["madame", "夫人/女士"], ["mademoiselle", "小姐"],
      ["comment", "怎样"], ["ça", "这（指事情）"], ["bien", "好"], ["mal", "坏/差"],
      ["très", "非常"], ["enchanté", "幸会（很高兴认识）"], ["content", "高兴的"], ["d'accord", "同意/好的"],
      ["le nom", "姓氏"], ["le prénom", "名字"], ["la famille", "家庭"], ["l'ami / l'amie", "朋友"],
      ["la France", "法国"], ["le français", "法语"], ["l'anglais", "英语"], ["le chinois", "中文"],
      ["étudier", "学习"], ["apprendre", "学习（掌握）"]
    ],
    shorts: [
      ["Salut, ça va ?", "嗨，你好吗？"],
      ["Oui, ça va bien, merci.", "是的，我很好，谢谢。"],
      ["Comment vous appelez-vous ?", "您叫什么名字？"],
      ["Je m'appelle Marie.", "我叫玛丽。"],
      ["Enchanté de faire votre connaissance.", "很高兴认识您。"],
      ["Merci beaucoup !", "非常感谢！"],
      ["Au revoir, à demain !", "再见，明天见！"],
      ["Pardon, je ne comprends pas.", "对不起，我没听懂。"],
      ["Parlez-vous anglais ?", "您会说英语吗？"],
      ["J'apprends le français.", "我在学法语。"]
    ],
    longs: [
      ["Bonjour, je suis très content de vous rencontrer aujourd'hui.", "你好，今天见到您很高兴。"],
      ["Je ne parle pas très bien le français, mais je comprends un peu.", "我法语说得不太好，但我能听懂一点。"],
      ["Excusez-moi, pouvez-vous parler plus lentement, s'il vous plaît ?", "对不起，请您说慢一点好吗？"],
      ["Merci beaucoup pour votre aide, c'est très gentil de votre part.", "非常感谢您的帮助，您真是太好了。"],
      ["Je voudrais apprendre le français parce que j'aime la France.", "我想学法语，因为我喜欢法国。"]
    ]
  },

  /* ---------- 2 课：数字与时间 ---------- */
  {
    day: 2,
    title: "数字与时间",
    focus: "数字、钟点与日期",
    words: [
      ["un / une", "一"], ["deux", "二"], ["trois", "三"], ["quatre", "四"], ["cinq", "五"],
      ["six", "六"], ["sept", "七"], ["huit", "八"], ["neuf", "九"], ["dix", "十"],
      ["vingt", "二十"], ["trente", "三十"], ["quarante", "四十"], ["cinquante", "五十"], ["soixante", "六十"],
      ["cent", "百"], ["mille", "千"], ["l'heure (f.)", "小时/钟点"], ["la minute", "分钟"], ["le jour", "天"],
      ["la nuit", "夜"], ["le matin", "早晨"], ["l'après-midi", "下午"], ["le soir", "晚上"],
      ["midi", "中午"], ["minuit", "午夜"], ["la semaine", "星期"], ["le mois", "月份"],
      ["l'année", "年"], ["la date", "日期"]
    ],
    shorts: [
      ["Quelle heure est-il ?", "现在几点了？"],
      ["Il est trois heures.", "现在三点了。"],
      ["Il est midi.", "现在是中午。"],
      ["J'ai vingt ans.", "我二十岁。"],
      ["Quelle est la date aujourd'hui ?", "今天几号？"],
      ["Nous sommes le deux avril.", "今天是四月二日。"],
      ["Je me lève à sept heures.", "我七点起床。"],
      ["Le rendez-vous est à deux heures.", "约会定在两点。"],
      ["Je travaille huit heures par jour.", "我每天工作八小时。"],
      ["La banque ouvre à neuf heures.", "银行九点开门。"]
    ],
    longs: [
      ["Je me lève tous les jours à sept heures et demie du matin.", "我每天早上七点半起床。"],
      ["Nous avons rendez-vous à quatre heures de l'après-midi devant le cinéma.", "我们下午四点约在电影院门口见面。"],
      ["Il travaille du lundi au vendredi, de neuf heures à dix-huit heures.", "他周一到周五工作，从九点到十八点。"],
      ["Mon anniversaire est le dix mars, et le tien, c'est quand ?", "我的生日是三月十日，你的呢？"],
      ["Le train part à dix heures et demie et il arrive à Paris à midi.", "火车十点半出发，中午到达巴黎。"]
    ]
  },

  /* ---------- 3 课：家庭与人物 ---------- */
  {
    day: 3,
    title: "家庭与人物",
    focus: "介绍家庭成员与职业",
    words: [
      ["le père", "父亲"], ["la mère", "母亲"], ["les parents", "父母"], ["le frère", "兄弟"],
      ["la sœur", "姐妹"], ["le fils", "儿子"], ["la fille", "女儿"], ["le mari", "丈夫"],
      ["la femme", "妻子/女人"], ["le garçon", "男孩"], ["la petite fille", "小女孩"], ["le bébé", "婴儿"],
      ["les enfants", "孩子们"], ["le voisin / la voisine", "邻居"], ["le professeur", "老师"],
      ["le médecin", "医生"], ["l'ingénieur", "工程师"], ["l'étudiant / l'étudiante", "大学生"],
      ["le travail", "工作"], ["la maison", "房子"], ["l'école", "学校"], ["l'hôpital", "医院"],
      ["la ville", "城市"], ["habiter", "居住"], ["s'appeler", "名叫"], ["avoir", "有"],
      ["jeune", "年轻的"], ["vieux / vieille", "年老的"], ["grand", "高的/大的"], ["petit", "小的/矮的"]
    ],
    shorts: [
      ["Je m'appelle Léa.", "我叫蕾雅。"],
      ["J'ai un frère et deux sœurs.", "我有一个哥哥和两个妹妹。"],
      ["C'est ma mère, elle s'appelle Anne.", "这是我妈妈，她叫安妮。"],
      ["Nous sommes cinq dans ma famille.", "我们家有五口人。"],
      ["Mon père est médecin.", "我爸爸是医生。"],
      ["Ma mère est professeure.", "我妈妈是老师。"],
      ["Où habites-tu ?", "你住在哪里？"],
      ["J'habite à Lyon.", "我住在里昂。"],
      ["Nous avons un chien à la maison.", "我们家有一只狗。"],
      ["Elle travaille à l'hôpital.", "她在医院工作。"]
    ],
    longs: [
      ["Bonjour, je m'appelle Claire, je suis étudiante à l'université de Lyon.", "你好，我叫克莱尔，是里昂大学的学生。"],
      ["Mon père travaille à l'hôpital et ma mère enseigne à l'école.", "我爸爸在医院工作，我妈妈在学校教书。"],
      ["J'ai un frère et une sœur ; ils sont plus jeunes que moi.", "我有一个弟弟一个妹妹，他们都比我小。"],
      ["La famille de mon voisin a deux enfants : un garçon et une fille.", "我邻居家有两个孩子：一个男孩一个女孩。"],
      ["Je suis très content de faire votre connaissance, madame Dupont.", "很高兴认识您，杜邦夫人。"]
    ]
  },

  /* ---------- 4 课：食物与餐厅 ---------- */
  {
    day: 4,
    title: "食物与餐厅",
    focus: "点餐与饮食表达",
    words: [
      ["le pain", "面包"], ["le fromage", "奶酪"], ["le lait", "牛奶"], ["l'eau", "水"],
      ["le café", "咖啡"], ["le thé", "茶"], ["le vin", "葡萄酒"], ["le jus", "果汁"],
      ["le sucre", "糖"], ["le sel", "盐"], ["le beurre", "黄油"], ["la viande", "肉"],
      ["le poulet", "鸡肉"], ["le poisson", "鱼"], ["le bœuf", "牛肉"], ["le riz", "米饭"],
      ["les légumes", "蔬菜"], ["les fruits", "水果"], ["la pomme", "苹果"], ["l'orange", "橙子"],
      ["la banane", "香蕉"], ["le déjeuner", "午餐"], ["le dîner", "晚餐"], ["le petit déjeuner", "早餐"],
      ["le restaurant", "餐厅"], ["l'addition", "账单"], ["le menu", "菜单"], ["la table", "桌子"],
      ["délicieux / délicieuse", "美味的"], ["manger", "吃"]
    ],
    shorts: [
      ["J'ai faim.", "我饿了。"],
      ["J'ai soif.", "我渴了。"],
      ["Je voudrais un café, s'il vous plaît.", "我想要一杯咖啡。"],
      ["L'addition, s'il vous plaît.", "请结账。"],
      ["Le déjeuner est délicieux.", "午餐很美味。"],
      ["Je prends mon petit déjeuner à sept heures.", "我七点吃早餐。"],
      ["Tu veux du thé ou du café ?", "你想喝茶还是咖啡？"],
      ["Nous allons au restaurant ce soir.", "我们今晚去餐厅。"],
      ["Je ne mange pas de viande.", "我不吃肉。"],
      ["Je voudrais réserver une table pour deux.", "我想预订一张两人桌。"]
    ],
    longs: [
      ["Pour le petit déjeuner, je mange du pain avec du beurre et je bois du café.", "早餐我吃黄油面包，喝咖啡。"],
      ["Je voudrais réserver une table pour deux personnes à sept heures du soir.", "我想预订今晚七点的两人桌。"],
      ["La cuisine française est célèbre dans le monde entier.", "法国菜世界闻名。"],
      ["Il y a beaucoup de légumes et de fruits au marché ce matin.", "今天早上的市场里有很多蔬菜和水果。"],
      ["Pour le dîner, nous mangeons du poisson avec du riz et nous buvons de l'eau.", "晚餐我们吃鱼配米饭，喝水。"]
    ]
  },

  /* ---------- 5 课：天气与季节 ---------- */
  {
    day: 5,
    title: "天气与季节",
    focus: "谈论天气与四季",
    words: [
      ["le temps", "天气"], ["la météo", "天气预报"], ["le soleil", "太阳"], ["la lune", "月亮"],
      ["l'étoile", "星星"], ["le vent", "风"], ["la pluie", "雨"], ["la neige", "雪"],
      ["l'orage", "暴风雨"], ["le nuage", "云"], ["le ciel", "天空"], ["la température", "气温"],
      ["la saison", "季节"], ["le printemps", "春天"], ["l'été", "夏天"], ["l'automne", "秋天"],
      ["l'hiver", "冬天"], ["chaud", "热的"], ["froid", "冷的"], ["frais / fraîche", "凉爽的"],
      ["beau", "晴朗的/美好的"], ["mauvais", "坏的"], ["pleuvoir", "下雨"], ["neiger", "下雪"],
      ["la montagne", "山"], ["la mer", "海"], ["le climat", "气候"], ["le degré", "度"],
      ["le parapluie", "雨伞"], ["agréable", "宜人的"]
    ],
    shorts: [
      ["Il fait beau aujourd'hui.", "今天天气真好。"],
      ["Il pleut.", "下雨了。"],
      ["Il fait froid en hiver.", "冬天很冷。"],
      ["Il fait chaud en été.", "夏天很热。"],
      ["Quelle est la température ?", "现在多少度？"],
      ["Le ciel est bleu.", "天空是蓝的。"],
      ["Il neige à Paris.", "巴黎下雪了。"],
      ["J'aime le printemps.", "我喜欢春天。"],
      ["Il faut prendre un parapluie.", "要带一把伞。"],
      ["En France, il y a quatre saisons.", "法国有四个季节。"]
    ],
    longs: [
      ["Quand il pleut, je reste à la maison et je lis un livre.", "下雨的时候，我待在家里读书。"],
      ["En hiver, il neige souvent dans les montagnes du sud de la France.", "冬天，法国南部的山区经常下雪。"],
      ["Le climat de la côte est très agréable en été.", "海滨地区夏天的气候很宜人。"],
      ["Il y a beaucoup de nuages aujourd'hui, mais il ne pleut pas.", "今天云很多，但没有下雨。"],
      ["Il fait vingt-cinq degrés, c'est le temps parfait pour une promenade.", "今天二十五度，是散步的好天气。"]
    ]
  },

  /* ---------- 6 课：交通出行与购物 ---------- */
  {
    day: 6,
    title: "交通出行与购物",
    focus: "问路、出行与购物用语",
    words: [
      ["la voiture", "汽车"], ["le bus", "公交车"], ["le train", "火车"], ["le métro", "地铁"],
      ["l'avion", "飞机"], ["le vélo", "自行车"], ["la rue", "街道"], ["la gare", "火车站"],
      ["l'aéroport", "机场"], ["la station", "地铁站"], ["le billet", "车票"], ["le passeport", "护照"],
      ["le voyage", "旅行"], ["le touriste", "游客"], ["à droite", "右边"], ["à gauche", "左边"],
      ["tout droit", "一直走"], ["près de", "靠近"], ["loin", "远"], ["le magasin", "商店"],
      ["le supermarché", "超市"], ["le marché", "集市"], ["le prix", "价格"], ["l'argent", "钱"],
      ["la carte", "卡"], ["payer", "支付"], ["la robe", "连衣裙"], ["les chaussures", "鞋"],
      ["la taille", "尺码"], ["la couleur", "颜色"]
    ],
    shorts: [
      ["Où est la gare, s'il vous plaît ?", "请问火车站在哪里？"],
      ["Tournez à droite.", "向右转。"],
      ["Allez tout droit.", "一直走。"],
      ["Je prends le métro tous les jours.", "我每天都坐地铁。"],
      ["Combien ça coûte ?", "这个多少钱？"],
      ["C'est trop cher.", "太贵了。"],
      ["Je voudrais acheter un billet pour Paris.", "我想买一张去巴黎的票。"],
      ["Le marché est près d'ici.", "集市离这里很近。"],
      ["Je paie par carte.", "我刷卡支付。"],
      ["Quelle est votre taille ?", "您穿什么尺码？"]
    ],
    longs: [
      ["Pour aller à l'aéroport, vous pouvez prendre le train ou le taxi.", "去机场，您可以坐火车或出租车。"],
      ["Le centre-ville est à vingt minutes à pied de l'hôtel.", "市中心离酒店步行二十分钟。"],
      ["Combien coûte un billet aller-retour pour Paris, s'il vous plaît ?", "请问去巴黎的往返票多少钱？"],
      ["Ce manteau coûte cent cinquante euros, c'est un peu cher pour moi.", "这件大衣一百五十欧，对我来说有点贵。"],
      ["Si vous achetez deux articles, vous avez une réduction de dix pour cent.", "如果您买两件，可以享受九折优惠。"]
    ]
  }
];

/* =====================================================================
 * 简短文章（学完 6 课基础课程后推送，A1-A2 难度，附逐句翻译）
 * ===================================================================== */
window.ARTICLES = [
  {
    id: 1,
    title: "Ma journée（我的一天）",
    paras: [
      { fr: "Je me lève à sept heures du matin.", zh: "我早上七点起床。" },
      { fr: "Je prends mon petit déjeuner et je bois un café.", zh: "我吃早餐，喝一杯咖啡。" },
      { fr: "Je vais au travail en métro.", zh: "我坐地铁去上班。" },
      { fr: "À midi, je déjeune au restaurant avec mes collègues.", zh: "中午，我和同事们在餐厅吃午餐。" },
      { fr: "Le soir, je dîne à la maison et je regarde la télévision.", zh: "晚上，我在家吃晚餐，看看电视。" },
      { fr: "Je me couche à dix heures et demie.", zh: "我十点半上床睡觉。" }
    ]
  },
  {
    id: 2,
    title: "La famille de Léa（蕾雅的一家）",
    paras: [
      { fr: "Léa habite à Marseille avec sa famille.", zh: "蕾雅和家人住在马赛。" },
      { fr: "Son père est médecin à l'hôpital de la ville.", zh: "她爸爸是市医院的一名医生。" },
      { fr: "Sa mère est professeure de français au lycée.", zh: "她妈妈是中学的法语老师。" },
      { fr: "Léa a un frère et une sœur, ils sont étudiants.", zh: "蕾雅有一个哥哥和一个妹妹，他们都是大学生。" },
      { fr: "Le samedi, ils font une promenade au parc.", zh: "星期六，他们去公园散步。" },
      { fr: "Ils aiment beaucoup passer du temps ensemble.", zh: "他们很喜欢一起度过时光。" }
    ]
  },
  {
    id: 3,
    title: "Au marché（在集市）",
    paras: [
      { fr: "Le samedi matin, je vais au marché.", zh: "星期六早上，我去集市。" },
      { fr: "J'achète des légumes, des fruits et du fromage.", zh: "我买一些蔬菜、水果和奶酪。" },
      { fr: "Les prix sont corrects et les produits sont frais.", zh: "价格很实惠，食材很新鲜。" },
      { fr: "Je parle un peu français avec le vendeur.", zh: "我和摊主说几句法语。" },
      { fr: "Il est très gentil et patient.", zh: "他非常友好，也很有耐心。" },
      { fr: "Je rentre à la maison content de ma journée.", zh: "我带着愉快的心情回家。" }
    ]
  },
  {
    id: 4,
    title: "Les quatre saisons（四季）",
    paras: [
      { fr: "En France, il y a quatre saisons dans l'année.", zh: "法国一年有四个季节。" },
      { fr: "Le printemps est doux et les fleurs sont belles.", zh: "春天很温暖，花儿很美。" },
      { fr: "En été, il fait chaud et on va à la mer.", zh: "夏天很热，人们去海边。" },
      { fr: "En automne, les feuilles tombent et il fait frais.", zh: "秋天落叶，天气凉爽。" },
      { fr: "En hiver, il fait froid, parfois il neige.", zh: "冬天很冷，有时下雪。" },
      { fr: "Chaque saison a ses belles couleurs et son charme.", zh: "每个季节都有它美丽的色彩和魅力。" }
    ]
  },
  {
    id: 5,
    title: "Voyage à Paris（巴黎之旅）",
    paras: [
      { fr: "Je vais à Paris avec ma famille la semaine prochaine.", zh: "下周我和家人去巴黎。" },
      { fr: "Nous prenons le train tôt le matin.", zh: "我们一早坐火车出发。" },
      { fr: "Nous visitons la tour Eiffel et le musée du Louvre.", zh: "我们参观埃菲尔铁塔和卢浮宫。" },
      { fr: "Le soir, nous nous promenons au bord de la Seine.", zh: "晚上，我们在塞纳河边散步。" },
      { fr: "Paris est une belle ville, très riche en histoire.", zh: "巴黎是一座美丽的城市，历史悠久。" },
      { fr: "Je veux parler français pour mieux connaître cette ville.", zh: "我想学好法语，更好地了解这座城市。" }
    ]
  }
];