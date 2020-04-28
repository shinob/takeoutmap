//中心座標の初期値
var lat = 35.468606;
var lng = 133.059026;

var init_zoom = 14;

function load_points() {
    
    return [
/*
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
        [[],	"", "", ""],
*/
        [[35.4970444, 133.0817171],	"ウホウホデリバリー", "https://www.facebook.com/oowaoowadelivery/", "0852-33-7009"],
        [[35.39441, 133.0815968],	"ivi cafe", "https://www.facebook.com/ivicafe/", "0852-61-2662"],
        [[35.455019, 133.0505839],	"あらびかコーヒー", "https://goo.gl/maps/Kr6c6RfaQrzmqrQd8", "0852-26-6365"],
        [[35.4613405, 133.0562751],	"旅館 寺津屋", "http://www.mable.ne.jp/~terazuya/", "0852-21-3480"],
        [[35.4644254, 133.0593574],	"やきとり家 すみれ 松江店", "https://y-smile.co.jp/matsue", "050-1705-8052"],
        [[35.465647, 133.060532],	"フレンチ酒場せるぽわ", "https://www.facebook.com/pages/category/French-Restaurant/フレンチ酒場せるぽわ-568382506608582/", "0852-25-7730"],
        [[35.463169, 133.058982],	"創作中華酒房 そら", "https://tabelog.com/shimane/A3201/A320101/32000125/","0852-24-9099"],
        [[35.4688909, 133.0482338],	"シュプリーム ホテル", "https://twitter.com/india_mace", "0852-67-6615"],
        [[35.471391, 133.053177],	"蓬莱吉日庵", "https://www.facebook.com/horaiso/", "0852-28-1358"],
        [[35.4691184, 133.0525569],	"coffee&beer B-BRIDGE", "https://www.facebook.com/bbridgecafe/", "0852-28-5877"],
        
        [[35.4684122, 133.0463113],	"ル・レストランハラ", "https://www.facebook.com/pages/ル-レストランハラ/112594665465927", "0852-25-2010"],
        [[35.441102, 133.062653],	"楽一献 八千代亭", "https://www.facebook.com/割烹ダイニング-八千代亭-334871633275258/", "0852-22-7078"],
        [[35.4622355, 133.058087],	"馳走かへる", "https://www.facebook.com/chisoukaheru/", "0852-67-3993"],
        [[35.4629486, 133.0585232],	"竹山寺町店", "https://goo.gl/maps/9QFb426hBfvFLCZC8", "0852-24-2317"],
        [[35.4620004, 133.0756411],	"Omaggio da Konishi", "https://www.facebook.com/omaggio.da.konishi/", "080-3892-6739"],
        [[35.4697872, 133.0528412],	"レストラン 西洋軒", "https://goo.gl/maps/iPaPtcGe9YVRrcuF9", "050-5263-2560"],
        [[35.4787583, 133.0665822],	"サローネ デル カフェハットリ", "http://www.hattori-coffee.co.jp/shop/salone/index.htm", "0852-27-6999"],
        [[35.481208, 133.070746],	"ハイドアウト", "https://www.facebook.com/matuehideoutt/", "0852-31-9688"],
        [[35.4637375, 133.0616805],	"寿司酒場 あやまち", "https://www.facebook.com/小料理-あやまち-946067292097314/", "0852-28-0737"],
        [[35.466674, 133.057066],	"半睡", "https://goo.gl/maps/2quad5ymdQXsgQgd6", "0852-25-3108"],
        
        [[35.470356, 133.053371],	"ふれんち酒場びいどろ", "https://www.instagram.com/f.biidoro/", "0852-20-6627"],
        [[35.4649896, 133.0586597],	"松江の隠れ居酒屋 朔屋", "https://twitter.com/sakuya_matsue", "0852-28-1440"],
        [[35.4651102, 133.0609708],	"味処 明島", "https://twitter.com/ll1PRmpsKFlMV9s", "0852-28-2239"],
        [[35.469812, 133.0556007],	"季節料理 湖粋", "https://www.facebook.com/pages/季節料理-湖粋/1530677173840871", "0852-31-8332"],
        [[35.463007, 133.063986],	"炉ばた だるま", "https://www.facebook.com/pages/炉ばた-だるま/143781605755994", "0852-22-4911"],
        [[35.466206, 133.06044],	"おばちゃん家朋寛", "https://www.facebook.com/pages/おばちゃん家朋寛/431045343617522", "0852-67-3744"],
        [[35.4444246, 133.0645052],	"ラーメン長さん", "https://www.facebook.com/pages/ラーメン長さん/355477841139446", "0852-25-1870"],
        [[35.446314, 133.057115],	"食道楽 浜乃木店", "http://www.kuidouraku.jp/nagimenyu-.html", "0852-26-3303"],
        [[35.468799, 133.045852],	"お料理 仕出し 小林", "https://www.matsue-ryouri-shidashi-kobayashi.jp/", "0852-21-3481"],
        [[35.4081611, 132.9057919],	"くじら軒", "https://www.facebook.com/ken.kujira", "0852-66-2518"],
        
        [[35.4625916, 133.0640106],	"うちごはん希", "https://www.facebook.com/uchigohannozomi11/", "0852-67-6033"],
        [[35.464024, 133.065493],	"（有）神戸屋", "https://goo.gl/maps/mC2MoWAt9SR8q9KZ9", "0852-21-0645"],
        [[35.469354, 133.054263],	"食酒処 かわばた", "https://r.gnavi.co.jp/9cvrwa2r0000/", "0852-28-5885"],
        [[35.4842186, 133.0679046],	"The 伊太利屋.it Liberta", "https://itariya.co.jp/home/takeout/", "0852-32-9595"],
        [[35.464408, 133.061762],	"本格中華酔仙楼", "https://www.facebook.com/suisenro/", "0852-67-6767"],
        [[35.4705507, 133.0535853],	"ナクリア", "https://www.facebook.com/nakria.matsue/", "0852-22-7702"],
        [[35.445986, 133.061895],	"カフェ ブラウニー", "https://www.facebook.com/Cafe-Brownie-341451156300609/", "0852-61-0669"],
        [[35.4631393, 133.0600482],	"スタミナ串焼き内田", "https://www.facebook.com/staminakushiyakiuchida/", "0852-24-5592"],
        [[35.4651185, 133.0591464],	"肉ノ匠 炭家", "https://www.facebook.com/niku29sumika/", "080-2938-8708"],
        [[35.4648825, 133.0595358],	"イマジンコーヒー", "https://www.facebook.com/Imaginecoffee-イマジン珈琲店-455458197962217/", "0852-25-9277"],
        
        [[35.4662192, 133.0434847],	"松江鮨 徳さん", "https://www.facebook.com/tokusan789051/", "0852-78-9051"],
        [[35.466098, 133.0437152],	"Cafe La Pierre", "https://www.facebook.com/cafelapierre/", "080-2897-4518"],
        [[35.4647773, 133.0583963],	"漁師小屋 麦穂", "https://www.facebook.com/漁師小屋麦穂-568679533245810/", "0852-67-2477"],
        [[35.4791839, 133.0708392],	"食堂晴レ", "https://www.facebook.com/pages/食堂晴レ/358466054493688", "0852-61-4180"],
        [[35.441968, 133.055689],	"桃仙閣", "https://www.facebook.com/tousenkaku/", "0852-21-3946"],
        [[35.5149708, 133.1909399],	"うなぎ処 山美世", "https://www.facebook.com/yamamise/", "0852-76-3198"],
        [[35.4645884, 133.0609068],	"山芳ばる", "https://www.facebook.com/8044bar/", "0852-23-0620"],
        [[35.4693721, 133.0511908],	"喫茶MG", "http://www.kissa-mg.com/", "0852-24-2099"],
        [[35.4762453, 133.0553938],	"紅茶専門店Pungency", "https://www.facebook.com/紅茶専門店Pungency-1397825816955129/", "0852-78-2682"],
        [[35.469720, 133.054857],	"蒼の音", "https://www.facebook.com/蒼の音-1602828466530702/", "0852-67-6228"],
        
        [[35.479672, 133.045914],	"京らぎ 黒田店", "https://www.facebook.com/kyoragi.kuroda/", "0852-25-2233"],
        [[35.469376, 133.054377],	"創作中華 パパ厨房", "https://www.facebook.com/papachuu/", "0852-25-7588"],
        [[35.466143, 133.0598808],	"酒とさかな でろ", "https://www.facebook.com/deromatsue/", "0852-61-0815"],
        [[35.4708019, 133.0540227],	"KARLY", "https://karly.jp", "0852-26-5707"],
        [[35.4640186, 133.0542759],	"メルモのおやつ", "https://www.facebook.com/メルモのおやつ-377985305625329/", "0852-67-6016"],
        [[35.4703235, 133.0681255],	"スカラベ136", "https://www.facebook.com/cafeScarab/", "0852-22-2003"],
        [[35.4696387, 133.0469897],	"バンブー カフェテリア", "https://tabelog.com/shimane/A3201/A320101/32005904/", "0852-23-0890"],
        [[35.4574903, 133.0678118],	"リストランテ グラッパ", "https://www.facebook.com/RisutoranteGurappa/", "0852-25-9713"],
        [[35.4587852, 133.0608696],	"手打ちそば 東風（こち）", "https://tabelog.com/shimane/A3201/A320101/32004237/", "0852-67-2618"],
        [[35.4696079, 133.054515],	"佐香や カラコロ広場店", "https://www.facebook.com/sakaya.karakoro/", "0852-23-1887"],
        
        [[35.4694074, 133.0537399],	"ビストロクール", "https://www.facebook.com/bistrocoeur/", "0852-67-3418"],
        [[35.469367, 133.053896],	"Dining Cello", "https://tabiiro.jp/gourmet/s/309237-matsue-diningcello/", "0852-61-8858"],
        [[35.469270, 133.054497],	"Y's kitchen karakoro", "https://www.facebook.com/yskitchen.matsue/", "0852-61-8633"],
        [[35.4693794, 133.053279],	"浪花寿司", "https://www.facebook.com/pages/浪花寿司/136873296957763", "0852-21-4540"],
        [[35.4658015, 133.0590312],	"Pizzeria UWOZA", "https://www.facebook.com/uwoza/", "0852-26-2237"],
        [[35.4973111, 133.0810347],	"織香瑠", "https://tabelog.com/shimane/A3201/A320101/32001788/", "0852-27-5476"],
        [[35.454253, 133.050659],	"Cafe ailes", "https://www.facebook.com/cafeailes/", "090-6415-5400"],
	    [[35.4712538, 133.0553258],	"ぼうげつ", "https://www.facebook.com/bougetsu/", "0852-23-9768"],
        [[35.4735519, 133.0542306],	"Green's Baby（グリーンズベイビー）", "https://www.facebook.com/greensbaby", "0852-61-3208"],
        [[35.4621815, 133.0580281],	"カメノ食堂", "https://www.facebook.com/kamekamekameno", "0852-40-9247"],
        
        [[35.4649835, 133.0601285], "地産地相酒場 たかの屋", "https://tabelog.com/shimane/A3201/A320101/32004702/", "050-5589-9266"],
        [[35.4635977,133.0595794],	"Japanesque", "https://www.facebook.com/Japanesque-307584292731524", "0852-67-5959"],
        [[35.4637104,133.0589293],	"誘酒庵", "https://www.facebook.com/jizakeyushuan", "0852-22-3981"],
        [[35.4590541, 133.0830501], "鶏笑 松江東津田店", "https://www.facebook.com/torisho.matsuehigashitsuda", "0852-61-9181"],
        [[35.440263,133.060744],	"ミスター・バーク 松江浜乃木店", "http://www.mr-b.jp/shop04.html", "0852-27-7702"],
        [[35.4651378, 133.0610506],	"海鮮鉄板やまおか食堂", "https://www.facebook.com/海鮮鉄板やまおか食堂-1988999641385629", "0852-27-0808"],
        [[35.4754690, 133.0686863], "旨い とんかつ かつふじ", "https://www.facebook.com/katsufuzi", "0852-31-6711"],
        [[35.4659026, 133.0589821],	"谷屋", "https://www.facebook.com/0sn0292878t432r", "070-3788-4857"],
        [[35.4658345, 133.0599149],	"イタリア料理 Al SOLE","https://www.facebook.com/ItalianoAlSole/", "0852-28-0272"],
        [[35.373385, 132.7359618],	"出雲翠苑", "https://www.facebook.com/izumosuien", "0853-22-7708"]
    ];
    
}
