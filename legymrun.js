/*
乐健修改跑步数据
（适用于UESTC）
脚本版本： 1.0.4
脚本作者：BlingCc
更新时间：2024-03-03
主页：blingcc.eu.org
声明：此脚本仅供学习交流


⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
⚠️    该脚本目前不可用，请不要开启该模块。     ⚠️
⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️


**************************

QuantumultX:

[rewrite_locala]
^https?:\/\/cpes\.legym\.cn\/running\/app\/v2\/uploadRunningDetails url script-request-header https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/legym.js

[mitm] 

hostname = cpes.legym.cn

*******************************/

var obj = JSON.parse($request.body);

obj.routineLine = [{"latitude":30.755299479166666,"longitude":103.93225043402778},{"latitude":30.755297158684034,"longitude":103.93227575272478},{"latitude":30.755273455894542,"longitude":103.93229211791352},{"latitude":30.755136999518832,"longitude":103.93233232444453},{"longitude":103.93234622425641,"latitude":30.755106656476514},{"longitude":103.93248380846909,"latitude":30.754934142328352},{"longitude":103.93269964728768,"latitude":30.754740427483412},{"longitude":103.93279235671635,"latitude":30.754636621804039},{"longitude":103.93283394472576,"latitude":30.754549201023249},{"latitude":30.754339650986683,"longitude":103.93302725484733},{"latitude":30.75422142826601,"longitude":103.93310613330002},{"latitude":30.754175335945046,"longitude":103.93312438280748},{"latitude":30.75385222225303,"longitude":103.93311611369589},{"latitude":30.753785443807917,"longitude":103.93312094627724},{"longitude":103.93310948939168,"latitude":30.75371748369562},{"latitude":30.753596231128554,"longitude":103.93305208615399},{"latitude":30.753504960655825,"longitude":103.93299079980049},{"latitude":30.753295972772541,"longitude":103.93278676786116},{"longitude":103.93257697397674,"latitude":30.753119679563124},{"latitude":30.752797563352122,"longitude":103.93226097701408},{"latitude":30.752753703723961,"longitude":103.93223183530525},{"latitude":30.752701530504371,"longitude":103.93217568580758},{"longitude":103.93212493212413,"latitude":30.752682592949345},{"longitude":103.93203604474138,"latitude":30.75268344105238},{"longitude":103.93189625790627,"latitude":30.75270016426218},{"longitude":103.93175154636211,"latitude":30.752743131255592},{"longitude":103.9315648421158,"latitude":30.752824284888046},{"longitude":103.93125731476771,"latitude":30.752982408897061},{"latitude":30.75306688447802,"longitude":103.93113003359224},{"longitude":103.93090994823298,"latitude":30.753183656121045},{"latitude":30.753672782564731,"longitude":103.93013433237097},{"latitude":30.753742391395189,"longitude":103.93000370111169},{"longitude":103.92977004663945,"latitude":30.753870332190196},{"longitude":103.92944812963061,"latitude":30.753984501283014},{"latitude":30.754001687901539,"longitude":103.92937653202141},{"latitude":30.754009249811443,"longitude":103.92929321041305},{"latitude":30.75399347360803,"longitude":103.92905478750389},{"latitude":30.753966151556167,"longitude":103.92873905315514},{"longitude":103.92851160970086,"latitude":30.753986191522046},{"latitude":30.75407840052284,"longitude":103.9281239878372},{"latitude":30.754126081077512,"longitude":103.92799791392481},{"longitude":103.92788734557064,"latitude":30.754147017446979},{"latitude":30.754145317868449,"longitude":103.92784954898387},{"longitude":103.92779687850678,"latitude":30.754113131828465},{"longitude":103.92769402039271,"latitude":30.753998716144018},{"latitude":30.753747769652882,"longitude":103.92752881529927},{"latitude":30.753726674971706,"longitude":103.92751046901579},{"longitude":103.92748261322915,"latitude":30.753665488947526},{"longitude":103.92745937594391,"latitude":30.75356180974978},{"latitude":30.752913061091519,"longitude":103.92718573223689},{"latitude":30.752671321500074,"longitude":103.92707075493948},{"latitude":30.752570906456246,"longitude":103.92703239119174},{"longitude":103.92687128595422,"latitude":30.752230199366323},{"longitude":103.92672699404623,"latitude":30.752010062731298},{"latitude":30.751958263638912,"longitude":103.92668023196701},{"longitude":103.92634266413712,"latitude":30.75154763340235},{"longitude":103.92620237919576,"latitude":30.751370459340876},{"latitude":30.75131713047767,"longitude":103.92614469543891},{"longitude":103.92607670094228,"latitude":30.751274454327117},{"longitude":103.92600997959228,"latitude":30.751244827962847},{"longitude":103.92593483983605,"latitude":30.751230401311016},{"longitude":103.92568664779138,"latitude":30.75120881469482},{"latitude":30.751187909315497,"longitude":103.9255841671303},{"latitude":30.751158153313177,"longitude":103.92552571642118},{"longitude":103.92546524183855,"latitude":30.751088277326637},{"longitude":103.92543353509711,"latitude":30.751029774576082},{"latitude":30.750852093511085,"longitude":103.9254048174665},{"longitude":103.92538515647612,"latitude":30.750633180910302},{"latitude":30.750060197310933,"longitude":103.92529770036143},{"longitude":103.92527739481967,"latitude":30.749457701055498},{"latitude":30.749249028529022,"longitude":103.92530170180494},{"latitude":30.748705314630154,"longitude":103.92529713499253},{"latitude":30.748405091020857,"longitude":103.92522420451823},{"longitude":103.9251413304779,"latitude":30.74818175003772},{"longitude":103.92472106064776,"latitude":30.747168866909789},{"latitude":30.747103960363468,"longitude":103.92470622307809},{"longitude":103.92470387310327,"latitude":30.747025750159043},{"longitude":103.92470943238915,"latitude":30.746986925002968},{"latitude":30.746949164633993,"longitude":103.92472333561683},{"latitude":30.746914344789388,"longitude":103.92474327712992},{"longitude":103.92479740027724,"latitude":30.746852992306021},{"latitude":30.746517331921851,"longitude":103.92527249131561},{"latitude":30.746430956423527,"longitude":103.92542667752527},{"longitude":103.92550726573837,"latitude":30.746376928310077},{"longitude":103.92555254261281,"latitude":30.746352317755456},{"longitude":103.92564393797218,"latitude":30.746329519258307},{"longitude":103.92568550083074,"latitude":30.746335103983881},{"longitude":103.92572353768172,"latitude":30.746346454565767},{"longitude":103.92575349748049,"latitude":30.746362724400939},{"latitude":30.746439044650263,"longitude":103.92582941250662},{"latitude":30.746557533286509,"longitude":103.92592745751428},{"latitude":30.746651055964644,"longitude":103.9260238133128},{"longitude":103.9260664196391,"latitude":30.746718297885995},{"latitude":30.7468067693945,"longitude":103.92616374117658},{"longitude":103.92616548969536,"latitude":30.746823867181551},{"latitude":30.746858037675707,"longitude":103.92613896513403},{"latitude":30.74693076807127,"longitude":103.92597955172999},{"latitude":30.74697551467267,"longitude":103.92592040519375},{"latitude":30.747033571145177,"longitude":103.92585650752947},{"longitude":103.925822750804,"latitude":30.747058273018041},{"latitude":30.747090826896461,"longitude":103.92581331655104},{"latitude":30.747100439179327,"longitude":103.92581807625075},{"longitude":103.9258672287896,"latitude":30.74712037830524},{"longitude":103.92589269225205,"latitude":30.74715024580377},{"latitude":30.747149761308624,"longitude":103.92590389659927},{"latitude":30.747131199237362,"longitude":103.92593737550835},{"longitude":103.92598699238015,"latitude":30.747132215320168},{"latitude":30.747111886901571,"longitude":103.92601195711312},{"longitude":103.92593337003565,"latitude":30.747077083467168},{"longitude":103.9257690991445,"latitude":30.74706938665005},{"latitude":30.747099190362253,"longitude":103.92560932871216},{"longitude":103.92538074123132,"latitude":30.747134222766029},{"latitude":30.747153564260955,"longitude":103.92529474048384},{"latitude":30.747373766814015,"longitude":103.92533120191955},{"longitude":103.92535326268586,"latitude":30.747463540484453},{"longitude":103.9253707347075,"latitude":30.747423096831987},{"longitude":103.92538314142347,"latitude":30.74735990963784},{"longitude":103.92540888139636,"latitude":30.74734747406314},{"longitude":103.92548823790636,"latitude":30.747334478812586},{"longitude":103.9255371489442,"latitude":30.747342901058854},{"longitude":103.92557960646037,"latitude":30.747357735586981},{"latitude":30.747253461085382,"longitude":103.92550031811771},{"latitude":30.747231537548004,"longitude":103.92544694405336},{"latitude":30.74723523189726,"longitude":103.92543788734334},{"latitude":30.747248072408912,"longitude":103.92543681055518},{"latitude":30.747188993813303,"longitude":103.9253859043053},{"longitude":103.92532889068367,"latitude":30.74716443013574},{"latitude":30.74714912735266,"longitude":103.92523785145686},{"longitude":103.92521511875657,"latitude":30.747135644829168},{"latitude":30.747113609284497,"longitude":103.92520589877327},{"latitude":30.747087253757797,"longitude":103.92522071948328},{"longitude":103.92523130457779,"latitude":30.747089421886251},{"longitude":103.92523898948726,"latitude":30.747098156907303},{"longitude":103.9252282462575,"latitude":30.747090609675144}];

obj.gpsMileage = 3.7655144851433805;

var startTime = new Date(obj.startTime);
// 提前11分钟
startTime.setTime(startTime.getTime() - (11 * 60 * 1000));
// 将修改后的时间转换回所需的格式
var year = startTime.getFullYear();
var month = ('0' + (startTime.getMonth() + 1)).slice(-2); // 月份从0开始，所以加1
var day = ('0' + startTime.getDate()).slice(-2);
var hours = ('0' + startTime.getHours()).slice(-2);
var minutes = ('0' + startTime.getMinutes()).slice(-2);
var seconds = ('0' + startTime.getSeconds()).slice(-2);
obj.startTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

var keepTimeInSeconds = parseInt(obj.keepTime, 10); // 将字符串转换为整数
// 加上11分钟的秒数
keepTimeInSeconds += 11 * 60; // 11分钟等于660秒
// 将新的时间总秒数赋值回obj.keepTime
obj.keepTime = keepTimeInSeconds.toString();

obj.totalMileage = 3.7655144851433805;

obj.effectiveMileage = 3.5;

obj.calorie = 240;

obj.paceNumber = 2252;


$done({
  body: JSON.stringify(obj),
});

