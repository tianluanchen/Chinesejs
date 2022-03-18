/*
 * @Author       :  Ayouth
 * @Date         :  2022-03-11 GMT+0800
 * @LastEditTime :  2022-03-18 GMT+0800
 * @FilePath     :  Chinese.js
 * @Description  :  繁简体相互转换组件库
 * Copyright (c) 2022 by Ayouth, All Rights Reserved. 
 * GitHub   https://github.com/tianluanchen/Chinesejs
 */
; !function (global, factory) {
    global.Chinesejs = factory();
    global.Clang = global.Chinesejs;
    Clang.toLocaleString = function () {
        console.log('%cProject:Chinesejs  Author:Ayouth  GitHub:https://github.com/tianluanchen/Chinesejs', 'display:block;padding:5px;border-radius:3px;color:#f3f3f3;background-color:#4882ee;font-size:18px');
    };
}(self || window, function () {
    var simpleChinese = function () {
        return "内匀吊户册泛丢亘凶夫咤污伫别占吴删吕兑囱壮夹妆决冲没秃灾贝车迤见两来并并仑亚协儿恤姗佛届冈东抛争殁况状卧珏纠芈轧系兖侠长门侣克则劲却侄奸奂尸帅恒彦后拐汹为栅抵杯纣红纪纫纥约苎计订讣贞负军轨俩页风飞们伥闩仿个韦幸伦仓冻刚员娱剥孙岛师宫库悦径峡耻挟书气时晋乌泾狭狈疱佩亩纷纺纱纹纯纽纰级纭胁纳纸脉兹刍荆记讦讨讧讪讯托训讫岂财贡钉针轩钊轫闪阵乃陕回只饥马斗干咱伪伟侦侧国哑坚垩务动问执念够区参娄衔妇张强峥昆雕仑从带帐专将屉凄怅舍扫败挂启扪叙抡斩挣采卷昼弃浅栀勖条枭杀氢杆凉渊捆凄泪狰沦净现璃众产牵朱毕异细绅组终钵荚习茎绊弦统庄扎绍唇绋脱绌贫处觅规访轭讶软诀这讷许设讼连讹术衮贩迳责贯货贪伧伞凯顶剀顷创钗鱼扣鸟劳钓胜钏麦勋闭家陈陆阴备杰围尧丧场寻报岚单壶帧哟几唤厕乔厢复换恶扬闷拣惬恻恼挥涌凑减枣钦残栋壳栈涡汤栖测珐发浑涣盗困无苏砚画秆税犹痉丝络烟给绚笔肃华笋庵莱肾绞胀结绒绝评贵词买证贬诂贸虚诏贷诅诈诋诉诊贮贴贰贻视贲轲注费轴咏贺轶闵闰开周闲间进闲队邮阶乡阳钞钙钮钠钧钝隽钤云韧项顺须饪饭饨饮饬冯驭黄乱佣债涂冢传吗仅倾啬伤块坞偬奥呜铲呛剿妈园媪势圆汇损抢栗摇干愠捣忾厦怆汇彷晖榨晕会业爱极烦炼杨沟桢灭炀枫湿焕温爷岁毁准狮沧琅烟禄珲睐万棱当睁禀痹节盏粤经绢莴捆脚绑肿绥虏脑号义羡荤圣苇蜕叶肠话诛补诡询装诠里诟袅较载诧轼该贼轾详资试贾农诗贿运诘赀游夸赁诙赂诣赅达诚迹违铀铅刨钩过铂铃闸邹陨电钴钳钹钚钾预顽顿顼颁颂饲饴饱饰驰驮驯鸠寿呕伙侥叹梦喽夺奁仆啧侨雇妪团图划尘匮厌宁垫堑尝实殷寝态对畅屡惯崭恸岖惭惨币荣帼杠构搂别折掴彻枪滞渐涨氲涟滚沪渔渗渍涤汉满尔荦狱瑶琐玛疟疡疯愈痪尽监笺筝硕祯绽祸绾种综称绰洼绫窝绿紧缀网纲绮绸绵彩纶维绪缁罚闻搜苍台与席蚀莅盖制荪诵志语诬认诫误说诰诲诱诳狸宾赈赊铰赵铐赶银局铜辅铭辄铢轻铬挽铨衔远阂闺逊闽阁遥阀递合际颇领飒台饺饼饵饷驳肮鸣鸢厉凤唠么齐亿哗仪嘘价喷侬侩啸俭叽凛剧刘坟剑坠堕娴婵妩娇宽审写层帜废厨庙厮广厂弹惮抚愤捻征敌庆挚数虑暂扑忧捞样戚撑椁怂拨桩欲挠枢标怜悯楼桨乐溃枞润疮欧涧皑殇皱盘殴浆热眯泼牦奖洁确浇莹潜码纬肤致缄谷缅缉莲编缘荫窑缐穷缎缓蒋缍范骂卜罢葱缔练胶虾课蜗诿虱谄调谁论卫诤冲竖复猪赔赏谊赋谅贱谈账谆赌诞贤请卖诸赐质碰践辉辆辍辈辇轮辎适锐锉锋闾迁阅邻郑邓腌巩锌颉锑刮销养铺饿锄馁铝余驼驻驷驶驽驾驹驸发闹鱿鲁鸩鸦麸齿尽俦傧剂当吨惫懔哝忆嗳战垦坛拥挡奋挞袅据学掳导择宪凭捡机担历烫历焖晓淀焰浓独朴泽桦浊玑横瓯树炽卢椭炖磷桥烧瞒灯缣砖萦缚御县积颖稣窥腻蓑筑笃兴箬舱筛缢荡萧芜蚂萤裤亲觎谛谚谏讳辐谋辑谍输谐谘办诺谒谓选讽迟谕辽遗猫赖锭表锯踊锰错钱钢锡录铮锥锦阎随险沾静䩄颊哄颈鲍频鸵颔鸪头鸯颓鸭颐鸰鸳馆饯馄龙馅龟骇骈优骆偿储励咛尝吓压婴嫔嬷尴屿岭岳帮弥档应恳检桧戏栉殓泞击滨济挤拧蒙涛拟滥搁敛涩毙浚暧营灿烛毁烩墙狞获环瑷痨疗荡粪了矫缩绩缪缕矶缧绷缝禅总纵缫篓声聪联耸脓胆脸脍临举艰姜褛蔷觊谜谤谦亏讲谎谣谢誊溪蝼赚赛蝈购趋亵辖辗毂辕舆还迈酝丑镀镁虽锚键炼锲韩锅颗锤飓钟喂锺骋锹骏锻鲜锾鲛阔鲔阕鸿阑鸽闱板隐点隶斋丛噜向圹垒婶懑扩掷扰撵摆擞熏断犷猎槟瓮柜槛疠柠愈棹欤归殡础泻礼沈穑滤秽渎窜溅窍箫浏箪篑简粮织缮绕缭绣坛翘职聂脐膑旧萨踪蓝躯转借辙迩蛲医蝉酱虫厘镕觐镑觞锁谟钨谨镍谬镇丰阖赘闯阗蹒杂双雏鸡秋额颜题颚颛飏馏馊馈骑松鲨怀鲤懒鲫鹃鹅拢鹄旷冬橱椟榈咽橹咙坏潇垄濑坜宠沥庞濒庐惩烁牍犊兽獭玺琼畴蒙碍祷获稳帘签檐系茧裆绎绳袄绘哗罗谱膻识证谭腊谲讥艺赠薮赞药蚁蝇蝎跷辚轿辞边镜镝铲镞链镗镘镖镙锵镂铿关陇离鹊难鹌鹏雾丽韬韵麹类愿劝颠飕嘤馒严骛骗胡鲸鲳宝鹑悬鹉忏拦搀胧澜弥炉牺献珑痒症矿砺矾砾窦竞筹蕴篮蚝褴辫觉缤触继议胪译舰赢赡蔼趸蔺芦跶苹释锈阐飘饶饥骞腾骚鳃鳅咸面党龃出龄苏钟铙俪嗫续啭嚣兰藓属蛎惧慑蜡摄袜携览樱谴栏护歼誉赃烂踌癞跃眬轰藤辩缠镰镭铁铛铎镯辟响顾驱骠蓦骡髅鳍鳏莺鹤鹞龇龈俨呓啰孪巅峦弯摊踯权辔欢铸洒鉴滩鉴猡霁叠瘾鞑癣缰笼颤籁骄聋须听鳖脏鲢袭鳔衬鳗读鹧赎鸥赝鼹龉龊龚苏岩恋挛搅窃签缨纤萝蛊变逦镳铄靥显餍惊驿验脏体鳝鳞鳜鸶霉嘱坝揽瘫癫羁蚕让谗谶赣酿雳灵霭鳄鲈黩艳凿鹦骊郁鸾吁颦骤鬓魇鹰鹭硷盐鳌龌龋厅榄湾篱箩蛮蹑衅镶钥颅馋滦瞩赞驴骥缆躏钻銮锣锕嫒谙铵骜鳌钯呗钣鸨龅钡鹎锛荜哔滗铋筚跸苄缏笾飑飙瘪摈镔髌饽鹁钸骖黪锸侪掺冁蒇骣觇镡苌阊砗谌榇碜龀枨柽铖痴鸱铳帱雠蹰鹚苁骢辏蹿撺鹾哒骀绐郸掸殚赕瘅谠砀焘镫籴绨觌钿铫鲷鲽铤铥岽鸫簖怼镦谔阏锇锷鹗诶铒鸸鲕钒钫鲂诽绯镄鲱偾沣凫绂赙鲋鳆钆擀绀岗戆镐睾缟锆镉颍赓绠鲠苟缑觏锢鹘剐鸹观诖掼鹳刽匦刿妫鲑辊绲鲧埚呙铪阚绗灏颢诃黉荭闳鲎浒鹕骅铧缳鲩鳇荟哕浍缋诨阍钬镬蓟荠哜齑虿跻鲚郏浃铗镓碱荐戋戬睑鹣笕鲣鞯绛缴挢峤鹪疖颌鲒烬卺荩馑缙赆净刭弪胫靓厩阄鹫讵屦榉钜锔窭锩镌皲垲恺铠锴龛闶钪骒缂钶锞抠喾郐哙狯髋诓邝纩贶岿馈蒉愦聩阃锟鲲蛴崃徕涞赉铼谰斓镧阆锒涝崂铑铹鳓诔郦苈蓠呖缡枥栎轹锂鹂粝跞鲡鳢蔹潋琏裢裣魉镣钌鹩廪檩棂蛏鲮骝绺镏鹨茏泷栊砻偻蒌嵝瘘耧卤垆撸泸渌栌轳辂辘氇鸬舻脔娈栾囵逻泺椤脶锊呒唛杩劢谩缦颡铆麽钔幂谧猕祢渑腼黾缈缗馍镆钼呐铌鲵鲶茑啮镊陧蘖颟聍钕傩沤讴怄罴铍谝缥钋镤镨蕲骐桤碛颀颃钎佥荨悭缱椠墙嫱樯戗炝锖镪羟跄诮谯荞缲硗箧锓揿鲭茕蛱巯赇虮诎阒觑鸲颧绻辁阙悫荛娆桡嵘蝾缛铷蚬毵糁铯刹铩晒酾陕骟钐墒垧厍滠畲诜谂渖湿谥埘莳弑贳铈鲥绶摅纾缌锶锼谡谇狲唢睃闼铊鳎钛鲐昙钽锬顸傥饧铴绦铽缇鹈粜龆鲦烃钭钍抟箨鼍娲腽纨辋潍帏沩涠玮韪炜阌挝邬庑怃鹜铣饩阋觋硖线苋莶岘猃鹇痫籼跹芗骧缃飨哓骁绡撷绁缬陉荥锈馐鸺诩谖铉镟谑泶鳕埙浔鲟垭娅桠氩阉艳厣谳恹闫酽轺鳐邺晔烨铱诒峄怿钇镒镱瘗舣铟荧茔蓥撄滢潆璎瘿颏罂痈镛莸铕伛俣谀蓣嵛饫阈纡钰鹆鹬橼鼋钺郧郓芸恽韫殒攒瓒趱錾驵赜帻箦谮缯铡毡谵蛰锗谪浈缜轸钲骘轵贽鸷蛳絷踬觯诌绉槠馔颞骓缒着诼眦锱鲻诹驺鲰钻缵躜鳟翱沉迭皋硅秸里凌么扦抬锨彝灶札于凋讠谫郄勐凼坂垅垴埯埝苘荬荮莜莼菰藁揸吒吣咔咝咴噘噼嚯幞岙嵴彷徼犸狍馀馇馓馕愣憷丬溆滟溷漤潴澹甯纟绔绱珉枧桊桉槔橥轱轷赍肷胨飚煳煅熘愍淼砜磙眍钚钷铘铞锃锍锎锏锘锝锪锫锿镅镎镢镥镩镲稆鹋鹛鹱疬疴痖癯裥襁耢颥螨麴鲅鲆鲇鲞鲴鲺鲼鳊鳋鳘鳙鞒鞴齄";
    }
    var traditionalChinese = function () {
        return "內勻弔戶冊氾丟亙兇伕吒汙佇別佔吳刪呂兌囪壯夾妝決沖沒禿災貝車迆見兩來並併侖亞協兒卹姍彿屆岡東拋爭歿況狀臥玨糾羋軋係兗俠長門侶剋則勁卻姪姦奐屍帥恆彥後枴洶為柵牴盃紂紅紀紉紇約苧計訂訃貞負軍軌倆頁風飛們倀閂倣個韋倖倫倉凍剛員娛剝孫島師宮庫悅徑峽恥挾書氣時晉烏涇狹狽皰珮畝紛紡紗紋純紐紕級紜脅納紙脈茲芻荊記訐討訌訕訊託訓訖豈財貢釘針軒釗軔閃陣迺陝迴隻飢馬鬥乾偺偽偉偵側國啞堅堊務動問執唸夠區參婁啣婦張強崢崑彫崙從帶帳專將屜悽悵捨掃敗掛啟捫敘掄斬掙採捲晝棄淺梔勗條梟殺氫桿涼淵梱淒淚猙淪淨現琍眾產牽硃畢異細紳組終缽莢習莖絆絃統莊紮紹脣紼脫絀貧處覓規訪軛訝軟訣這訥許設訟連訛術袞販逕責貫貨貪傖傘凱頂剴頃創釵魚釦鳥勞釣勝釧麥勛閉傢陳陸陰備傑圍堯喪場尋報嵐單壺幀喲幾喚廁喬廂復換惡揚悶揀愜惻惱揮湧湊減棗欽殘棟殼棧渦湯棲測琺發渾渙盜睏無甦硯畫稈稅猶痙絲絡菸給絢筆肅華筍菴萊腎絞脹結絨絕評貴詞買証貶詁貿虛詔貸詛詐詆訴診貯貼貳貽視賁軻註費軸詠賀軼閔閏開週閑間進閒隊郵階鄉陽鈔鈣鈕鈉鈞鈍雋鈐雲韌項順須飪飯飩飲飭馮馭黃亂傭債塗塚傳嗎僅傾嗇傷塊塢傯奧嗚剷嗆勦媽園媼勢圓匯損搶慄搖幹慍搗愾廈愴彙徬暉搾暈會業愛極煩煉楊溝楨滅煬楓溼煥溫爺歲毀準獅滄瑯煙祿琿睞萬稜當睜稟痺節盞粵經絹萵綑腳綁腫綏虜腦號義羨葷聖葦蛻葉腸話誅補詭詢裝詮裡詬裊較載詫軾該賊輊詳資試賈農詩賄運詰貲遊誇賃詼賂詣賅達誠跡違鈾鉛鉋鉤過鉑鈴閘鄒隕電鈷鉗鈸鈽鉀預頑頓頊頒頌飼飴飽飾馳馱馴鳩壽嘔夥僥嘆夢嘍奪奩僕嘖僑僱嫗團圖劃塵匱厭寧墊塹嘗實慇寢態對暢屢慣嶄慟嶇慚慘幣榮幗槓構摟彆摺摑徹槍滯漸漲氳漣滾滬漁滲漬滌漢滿爾犖獄瑤瑣瑪瘧瘍瘋瘉瘓盡監箋箏碩禎綻禍綰種綜稱綽窪綾窩綠緊綴網綱綺綢綿綵綸維緒緇罰聞蒐蒼臺與蓆蝕蒞蓋製蓀誦誌語誣認誡誤說誥誨誘誑貍賓賑賒鉸趙銬趕銀跼銅輔銘輒銖輕鉻輓銓銜遠閡閨遜閩閣遙閥遞閤際頗領颯颱餃餅餌餉駁骯鳴鳶厲鳳嘮麼齊億嘩儀噓價噴儂儈嘯儉嘰凜劇劉墳劍墜墮嫻嬋嫵嬌寬審寫層幟廢廚廟廝廣廠彈憚撫憤撚徵敵慶摯數慮暫撲憂撈樣慼撐槨慫撥樁慾撓樞標憐憫樓槳樂潰樅潤瘡歐澗皚殤皺盤毆漿熱瞇潑犛獎潔確澆瑩潛碼緯膚緻緘穀緬緝蓮編緣蔭窯線窮緞緩蔣綞範罵蔔罷蔥締練膠蝦課蝸諉蝨諂調誰論衛諍衝豎複豬賠賞誼賦諒賤談賬諄賭誕賢請賣諸賜質踫踐輝輛輟輩輦輪輜適銳銼鋒閭遷閱鄰鄭鄧醃鞏鋅頡銻颳銷養鋪餓鋤餒鋁餘駝駐駟駛駑駕駒駙髮鬧魷魯鴆鴉麩齒儘儔儐劑噹噸憊懍噥憶噯戰墾壇擁擋奮撻嬝據學擄導擇憲憑撿機擔歷燙曆燜曉澱燄濃獨樸澤樺濁璣橫甌樹熾盧橢燉燐橋燒瞞燈縑磚縈縛禦縣積穎穌窺膩簑築篤興篛艙篩縊蕩蕭蕪螞螢褲親覦諦諺諫諱輻謀輯諜輸諧諮辦諾謁謂選諷遲諭遼遺貓賴錠錶鋸踴錳錯錢鋼錫錄錚錐錦閻隨險霑靜靦頰鬨頸鮑頻鴕頷鴣頭鴦頹鴨頤鴒鴛館餞餛龍餡龜駭駢優駱償儲勵嚀嚐嚇壓嬰嬪嬤尷嶼嶺嶽幫彌檔應懇檢檜戲櫛殮濘擊濱濟擠擰濛濤擬濫擱斂澀斃濬曖營燦燭燬燴牆獰獲環璦癆療盪糞瞭矯縮績繆縷磯縲繃縫禪總縱繅簍聲聰聯聳膿膽臉膾臨舉艱薑褸薔覬謎謗謙虧講謊謠謝謄谿螻賺賽蟈購趨褻轄輾轂轅輿還邁醞醜鍍鎂雖錨鍵鍊鍥韓鍋顆錘颶鍾餵鍾騁鍬駿鍛鮮鍰鮫闊鮪闋鴻闌鴿闈闆隱點隸齋叢嚕嚮壙壘嬸懣擴擲擾攆擺擻燻斷獷獵檳甕櫃檻癘檸癒櫂歟歸殯礎瀉禮瀋穡濾穢瀆竄濺竅簫瀏簞簣簡糧織繕繞繚繡罈翹職聶臍臏舊薩蹤藍軀轉藉轍邇蟯醫蟬醬蟲釐鎔覲鎊觴鎖謨鎢謹鎳謬鎮豐闔贅闖闐蹣雜雙雛雞鞦額顏題顎顓颺餾餿餽騎鬆鯊懷鯉懶鯽鵑鵝攏鵠曠鼕櫥櫝櫚嚥櫓嚨壞瀟壟瀨壢寵瀝龐瀕廬懲爍牘犢獸獺璽瓊疇矇礙禱穫穩簾簽簷繫繭襠繹繩襖繪譁羅譜羶識證譚臘譎譏藝贈藪贊藥蟻蠅蠍蹺轔轎辭邊鏡鏑鏟鏃鏈鏜鏝鏢鏍鏘鏤鏗關隴離鵲難鵪鵬霧麗韜韻麴類願勸顛颼嚶饅嚴騖騙鬍鯨鯧寶鶉懸鵡懺攔攙朧瀾瀰爐犧獻瓏癢癥礦礪礬礫竇競籌蘊籃蠔襤辮覺繽觸繼議臚譯艦贏贍藹躉藺蘆躂蘋釋鏽闡飄饒饑騫騰騷鰓鰍鹹麵黨齟齣齡蘇鐘鐃儷囁續囀囂蘭蘚屬蠣懼懾蠟攝襪攜覽櫻譴欄護殲譽贓爛躊癩躍矓轟籐辯纏鐮鐳鐵鐺鐸鐲闢響顧驅驃驀騾髏鰭鰥鶯鶴鷂齜齦儼囈囉孿巔巒彎攤躑權轡歡鑄灑鑑灘鑒玀霽疊癮韃癬韁籠顫籟驕聾鬚聽鱉臟鰱襲鰾襯鰻讀鷓贖鷗贗鼴齬齪龔囌巖戀攣攪竊籤纓纖蘿蠱變邐鑣鑠靨顯饜驚驛驗髒體鱔鱗鱖鷥黴囑壩攬癱癲羈蠶讓讒讖贛釀靂靈靄鱷鱸黷豔鑿鸚驪鬱鸞籲顰驟鬢魘鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻躡釁鑲鑰顱饞灤矚讚驢驥纜躪鑽鑾鑼錒嬡諳銨驁鰲鈀唄鈑鴇齙鋇鵯錛蓽嗶潷鉍篳蹕芐緶籩颮飆癟擯鑌髕餑鵓鈽驂黲鍤儕摻囅蕆驏覘鐔萇閶硨諶櫬磣齔棖檉鋮癡鴟銃幬讎躕鶿蓯驄輳躥攛鹺噠駘紿鄲撣殫賧癉讜碭燾鐙糴綈覿鈿銚鯛鰈鋌銩崠鶇籪懟鐓諤閼鋨鍔鶚誒鉺鴯鮞釩鈁魴誹緋鐨鯡僨灃鳧紱賻鮒鰒釓搟紺崗戇鎬睪縞鋯鎘潁賡綆鯁茍緱覯錮鶻剮鴰觀詿摜鸛劊匭劌媯鮭輥緄鯀堝咼鉿闞絎灝顥訶黌葒閎鱟滸鶘驊鏵繯鯇鰉薈噦澮繢諢閽鈥鑊薊薺嚌齏蠆躋鱭郟浹鋏鎵堿薦戔戩瞼鶼筧鰹韉絳繳撟嶠鷦癤頜鮚燼巹藎饉縉贐凈剄弳脛靚廄鬮鷲詎屨櫸鉅鋦窶錈鐫皸塏愷鎧鍇龕閌鈧騍緙鈳錁摳嚳鄶噲獪髖誆鄺纊貺巋饋蕢憒聵閫錕鯤蠐崍徠淶賚錸讕斕鑭閬鋃澇嶗銠鐒鰳誄酈藶蘺嚦縭櫪櫟轢鋰鸝糲躒鱺鱧蘞瀲璉褳襝魎鐐釕鷯廩檁欞蟶鯪騮綹鎦鷚蘢瀧櫳礱僂蔞嶁瘺耬鹵壚擼瀘淥櫨轤輅轆氌鸕艫臠孌欒圇邏濼欏腡鋝嘸嘜榪勱謾縵顙鉚麼鍆冪謐獼禰澠靦黽緲緡饃鏌鉬吶鈮鯢鯰蔦嚙鑷隉蘗顢聹釹儺漚謳慪羆鈹諞縹釙鏷鐠蘄騏榿磧頎頏釬僉蕁慳繾槧墻嬙檣戧熗錆鏹羥蹌誚譙蕎繰磽篋鋟撳鯖煢蛺巰賕蟣詘闃覷鴝顴綣輇闕愨蕘嬈橈嶸蠑縟銣蜆毿糝銫剎鎩曬釃陜騸釤墑坰厙灄畬詵諗瀋濕謚塒蒔弒貰鈰鰣綬攄紓緦鍶鎪謖誶猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋絳鋱緹鵜糶齠鰷烴鈄釷摶籜鼉媧膃紈輞濰幃溈潿瑋韙煒閿撾鄔廡憮鶩銑餼鬩覡硤線莧薟峴獫鷴癇秈躚薌驤緗饗嘵驍綃擷紲纈陘滎銹饈鵂詡諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬閹艷厴讞懨閆釅軺鰩鄴曄燁銥詒嶧懌釔鎰鐿瘞艤銦熒塋鎣攖瀅瀠瓔癭頦罌癰鏞蕕銪傴俁諛蕷崳飫閾紆鈺鵒鷸櫞黿鉞鄖鄆蕓惲韞殞攢瓚趲鏨駔賾幘簀譖繒鍘氈譫蟄鍺謫湞縝軫鉦騭軹贄鷙螄縶躓觶謅縐櫧饌顳騅縋著諑眥錙鯔諏騶鯫鉆纘躦鱒翺沈叠臯矽稭裏淩麽扡擡鍁彜竈劄於雕訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇";
    }
    /**
     * @description: 转简体
     * @param {String} str
     * @return {Object}
     */
    var simplized = function (str) {
        str = String(str);
        var result = '';
        var count = 0;
        var simple = simpleChinese();
        var traditional = traditionalChinese();
        for (var i = 0; i < str.length; i++) {
            var index = traditional.indexOf(str.charAt(i));
            if (index > -1) {
                result += simple.charAt(index);
                count++;
            } else {
                result += str.charAt(i);
            }
        }
        return {
            'result': result,
            'count': count
        };
    }
    /**
     * @description: 转繁体
     * @param {String} str
     * @return {Object}
     */
    var traditionalized = function (str) {
        str = String(str);
        var result = '';
        var count = 0
        var simple = simpleChinese();
        var traditional = traditionalChinese();
        for (var i = 0; i < str.length; i++) {
            var index = simple.indexOf(str.charAt(i));
            if (index > -1) {
                count++;
                result += traditional.charAt(index);
            } else {
                result += str.charAt(i);
            }
        }
        return {
            'result': result,
            'count': count
        };
    }


    /**
     * @description: 使用函数直接转换字符串到简体，counter参数表示是否返回转换字符数记录，promise表示是否使用promise，当数据过大时建议promise
     * @param {String} str
     * @param {Boolean} counter
     * @param {Boolean} promise
     * @return {Object|String|Promise}
     */
    var toSimple = function (str, counter, promise) {
        if (Boolean(promise)) {
            return new Promise(function (resolve, reject) {
                var obj = simplized(str);
                if (Boolean(counter) === true) {
                    resolve(obj);
                } else {
                    resolve(obj.result);
                }
                reject('unknown error');
            });
        }
        else {
            var obj = simplized(str);
            return Boolean(counter) ? obj : obj.result;
        }

    }
    /**
     * @description: 使用函数直接转换字符串到简体，counter参数表示是否返回转换字符数记录，promise表示是否使用promise，当数据过大时建议promise
     * @param {String} str
     * @param {Boolean} counter
     * @param {Boolean} promise
     * @return {Object|String|Promise}
     */
    var toTraditional = function (str, counter, promise) {
        if (Boolean(promise)) {
            return new Promise(function (resolve, reject) {
                var obj = traditionalized(str);
                if (Boolean(counter) === true) {
                    resolve(obj);
                } else {
                    resolve(obj.result);
                }
                reject('unknown error');
            });
        }
        else {
            var obj = traditionalized(str);
            return Boolean(counter) ? obj : obj.result;
        }

    }

    /**
     * @description: 允许的DOMNode类型
     */
    var legalTypes = [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.TEXT_NODE, Node.ELEMENT_NODE];
    /**
    * @description: 备份翻译前的文本
    * @param {Node} node
    * @param {String} text
    * @return {void}
    */
    function backupText(node, text) {
        if (!node || node.ClangBackupText) {
            return;
        }
        node.ClangBackupText = text;
    }
    /**
     * @description: 恢复节点翻译前的文本
     * @param {Node} node
     * @return {void}
     */
    function restoreText(node) {
        if (!node || !node.ClangBackupText) {
            return false;
        }
        if (['input', 'textarea'].some(function (tagName) { return node.nodeName && node.nodeName.toLowerCase() === tagName })) {
            node.value = node.ClangBackupText;
        } else if (node.nodeType === Node.TEXT_NODE) {
            node.data = node.ClangBackupText;
        }
        else {
            return false;
        }
        return true;
    }
    /**
     * @description: 恢复所有被翻译的节点
     * @param {void}
     * @return {Promise}
     */
    function restore(node) {
        return new Promise(function (resolve, reject) {
            var parent = node ? node : document;
            if (!legalTypes.some(function (type) { return parent.nodeType === type; })) {
                throw new Error('illegal NodeType,legal NodeType:'.concat(JSON.stringify(legalTypes)));
            }
            var nodeList = Array.prototype.slice.call(parent.childNodes);
            nodeList.length == 0 && nodeList.push(parent);
            var nodeCount = 0;
            try {
                while (nodeList.length > 0) {
                    node = nodeList.shift();
                    if (node.nodeType === Node.TEXT_NODE || ['input', 'textarea'].some(function (tagName) { return node.nodeName && node.nodeName.toLowerCase() === tagName })) {
                        if (restoreText(node)) {
                            nodeCount++;
                        }
                    }
                    else {
                        (node.childNodes || node).forEach(function (ele) {
                            nodeList.unshift(ele);
                        });
                    }
                }
                resolve({ 'nodeCount': nodeCount });
            } catch (error) {
                reject(new Error(error));
            }
        });
    }
    /**
     * @description: DOM转简体
     * @param {Node|HTMLElement} node
     * @return {Object}
     */
    var transDOMToSimple = function (node) {
        return new Promise(function (resolve, reject) {
            var parent = node ? node : document;
            if (!legalTypes.some(function (type) { return parent.nodeType === type; })) {
                throw new Error('illegal NodeType,legal NodeType:'.concat(JSON.stringify(legalTypes)));
            }
            var nodeList = Array.prototype.slice.call(parent.childNodes);
            nodeList.length == 0 && nodeList.push(parent);
            var nodeCount = 0;
            var charCount = 0;
            while (nodeList.length > 0) {
                node = nodeList.shift();
                if (['input', 'textarea'].some(function (tagName) { return node.nodeName && node.nodeName.toLowerCase() === tagName })) {
                    var r = simplized(node.value);
                    if (r.count > 0) {
                        backupText(node, node.value);
                        node.value = r.result;
                        nodeCount++;
                        charCount += r.count;
                    }
                }
                else if (node.nodeType === Node.TEXT_NODE) {
                    var r = simplized(node.data);
                    if (r.count > 0) {
                        backupText(node, node.data);
                        node.data = r.result;
                        nodeCount++;
                        charCount += r.count;
                    }
                } else {
                    (node.childNodes || node).forEach(function (ele) {
                        nodeList.unshift(ele);
                    })
                }
            }
            resolve({ 'nodeCount': nodeCount, 'charCount': charCount });
        });
    }
    /**
     * @description: DOM转繁体
     * @param {Node|HTMLElement} node
     * @return {Object}
     */
    var transDOMToTraditional = function (DOMNode) {
        return new Promise(function (resolve, reject) {
            var parent = DOMNode ? DOMNode : document;
            if (!legalTypes.some(function (type) { return parent.nodeType === type; })) {
                throw new Error('illegal NodeType,legal NodeType:'.concat(JSON.stringify(legalTypes)));
            }
            var nodeList = Array.prototype.slice.call(parent.childNodes);
            nodeList.length == 0 && nodeList.push(parent);
            var nodeCount = 0;
            var charCount = 0;
            var node;
            while (nodeList.length) {
                node = nodeList.shift();
                if (['input', 'textarea'].some(function (tagName) { return node.nodeName && node.nodeName.toLowerCase() === tagName })) {
                    var r = traditionalized(node.value);
                    if (r.count > 0) {
                        backupText(node, node.value);
                        node.value = r.result;
                        nodeCount++;
                        charCount += r.count;
                    }
                }
                else if (node.nodeType === Node.TEXT_NODE) {
                    var r = traditionalized(node.data);
                    if (r.count > 0) {
                        backupText(node, node.data);
                        node.data = r.result;
                        nodeCount++;
                        charCount += r.count;
                    }
                } else {
                    (node.childNodes || node).forEach(function (ele) {
                        nodeList.unshift(ele);
                    });
                }
            }
            resolve({ 'nodeCount': nodeCount, 'charCount': charCount });
        });
    }
    /**
     * @description: 自动翻译简体到繁体
     * @param {void}
     * @return {void}
     */
    var autoTranslate = function () {
        return new Promise(function (resolve, reject) {
            if (['zh-TW', 'zh-HK', 'zh-Hant', 'zh-MO'].some(function (lang) { return navigator.language === lang; })) {
                console.time('translate to traditional');
                transDOMToTraditional().then(function (result) {
                    console.timeEnd('translate to traditional');
                    result.current = 'traditional';
                    resolve(result);
                })
            } else if (['zh-CN', 'zh-Hans', 'zh-SG', 'zh-MY'].some(function (lang) { return navigator.language === lang; })) {
                console.time('translate to simple');
                transDOMToSimple().then(function (result) {
                    console.timeEnd('translate to simple');
                    result.current = 'simple';
                    resolve(result);
                })
            } else {
                reject('navigator.language is not Chinese');
            }
        });
    }
    var showWidget = function (opts = {
        leftTime: 3200,//无操作自动hide的时间
        text: "简",//"简" "繁" "原" "auto" 初始按钮选项 auto代表自动根据浏览器语言选择
        translate: null,//"简" "繁" "auto" 按钮出现前翻译 未设置不翻译 auto代表自动根据浏览器语言翻译 
        target: document.documentElement,
        customStyle: "",//自定义仿按钮的DIV css样式
        customHideStyle: "",//自定义隐藏的样式
    }) {
        var simple = null, traditionl = null;
        if (['zh-TW', 'zh-HK', 'zh-Hant', 'zh-MO'].some(function (lang) { return navigator.language === lang; })) {
            traditionl = true;
        }
        if (['zh-CN', 'zh-Hans', 'zh-SG', 'zh-MY'].some(function (lang) { return navigator.language === lang; })) {
            simple = true;
        }
        var customStyle = typeof opts.customStyle == "string" ? opts.customStyle : "";
        var customHideStyle = typeof opts.customHideStyle == "string" ? opts.customHideStyle : "";
        var target = opts.target ? opts.target : document.documentElement;
        var text = ["简", "繁", "原", "auto"].some(function (ele) { return ele === opts.text }) ? opts.text : "简";
        if (text == "auto") {
            text = "简";
            text = traditionl ? "繁" : "简";
        }
        var translate = ["简", "繁", "auto"].some(function (ele) { return ele === opts.translate }) ? opts.translate : null;
        if (translate == "auto") {
            translate = null;
            if (simple) {
                translate = "简";
            } else if (traditionl) {
                translate = "繁";
            }
        }
        var style = ".clang-menu-container { width: 48px; height: 48px; box-sizing: border-box; border-radius: 50%; background-image: linear-gradient(120deg, #2dc6d1 0%, #5386ce 100%); cursor: pointer; position: fixed; right: 32px; bottom: 32px; display: flex; align-items: center; justify-content: center; font-size: 17px; color: rgb(240, 240, 240); box-shadow: 0 0 4px 0 rgba(102, 146, 241, 0.3); user-select: none; transition: 0.25s ease-in-out; } .clang-menu-hide { right: -32px; }";
        var s = document.createElement('style');
        s.innerHTML = style;
        document.head.appendChild(s);
        var btn = document.createElement('div');
        btn.className = "clang-menu-container";
        btn.style = btn.customStyle = customStyle;
        btn.customHideStyle = customHideStyle;
        btn.translateFunc = {
            "简": function () {
                Chinesejs.transDOMToSimple(target)
            },
            "繁": function () {
                Chinesejs.transDOMToTraditional(target);
            },
            "原": function () {
                Chinesejs.restore(target);
            }
        }
        btn.textIndex = Object.keys(btn.translateFunc).indexOf(text);
        btn.textContent = text;
        btn.currentKey = text;
        btn.leftTime = typeof opts.leftTime == "number" ? opts.leftTime : 3200;
        btn.addEventListener('click', function (event) {
            var ele = event.target;
            ele.textIndex = (ele.textIndex + 1) % Object.keys(ele.translateFunc).length;
            ele.translateFunc[ele.currentKey]();
            ele.textContent = ele.currentKey = Object.keys(ele.translateFunc)[ele.textIndex];
            if (ele.timeoutID != undefined) {
                clearTimeout(ele.timeoutID);
            }
        });
        btn.addEventListener('mouseenter', function (event) {
            event.target.classList.toggle('clang-menu-hide', false);
            event.target.style = event.target.customStyle;
            if (event.target.timeoutID != undefined) {
                clearTimeout(event.target.timeoutID);
            }
        });
        function autoHide() {
            var btn = document.querySelector('.clang-menu-container');
            if (!btn) {
                return;
            }
            btn.timeoutID = setTimeout(function () {
                var btn = document.querySelector('.clang-menu-container');
                if (btn) {
                    btn.classList.toggle('clang-menu-hide', true);
                    btn.style = btn.customHideStyle;
                }
            }, btn.leftTime);
        }
        btn.translateFunc[translate] ? btn.translateFunc[translate]() : false;
        document.body ? document.body.appendChild(btn) : document.documentElement.appendChild(btn);
        btn.addEventListener('mouseleave', (autoHide(), autoHide));
    }
    var Chinesejs = new Object();
    Chinesejs.toSimple = toSimple;
    Chinesejs.toTraditional = toTraditional;
    Chinesejs.legalTypes = legalTypes;
    Chinesejs.transDOMToSimple = transDOMToSimple;
    Chinesejs.transDOMToTraditional = transDOMToTraditional;
    Chinesejs.autoTranslate = autoTranslate;
    Chinesejs.restore = restore;
    Chinesejs.showWidget = showWidget;
    return Chinesejs;
});