//中心座標の初期値
var lat = 35.468606;
var lng = 133.059026;

function load_points() {
    
    return [
        [[35.4625916, 133.0640106],	"うちごはん希", "https://www.facebook.com/uchigohannozomi11/"],
        [[35.464024, 133.065493],	"（有）神戸屋", "https://goo.gl/maps/mC2MoWAt9SR8q9KZ9"],
        [[35.469354, 133.054263],	"食酒処 かわばた", "https://r.gnavi.co.jp/9cvrwa2r0000/"],
        [[35.4842186, 133.0679046],	"The 伊太利屋.it Liberta", "https://itariya.co.jp/home/takeout/"],
        [[35.464408, 133.061762],	"本格中華酔仙楼", "https://www.facebook.com/suisenro/"],
        [[35.4705507, 133.0535853],	"ナクリア", "https://www.facebook.com/nakria.matsue/"],
        [[35.445986, 133.061895],	"カフェ ブラウニー", "https://www.facebook.com/Cafe-Brownie-341451156300609/"],
        [[35.4631393, 133.0600482],	"スタミナ串焼き内田", "https://www.facebook.com/staminakushiyakiuchida/"],
        [[35.4651185, 133.0591464],	"肉ノ匠 炭家", "https://www.facebook.com/niku29sumika/"],
        [[35.4648825, 133.0595358],	"イマジンコーヒー", "https://www.facebook.com/Imaginecoffee-イマジン珈琲店-455458197962217/"],
        
        [[35.4662192, 133.0434847],	"松江鮨 徳さん", "https://www.facebook.com/tokusan789051/"],
        [[35.466098, 133.0437152],	"Cafe La Pierre", "https://www.facebook.com/cafelapierre/"],
        [[35.4647773, 133.0583963],	"漁師小屋「麦穂」", "https://www.facebook.com/漁師小屋麦穂-568679533245810/"],
        [[35.4791839, 133.0708392],	"食堂晴レ", "https://www.facebook.com/pages/食堂晴レ/358466054493688"],
        [[35.441968, 133.055689],	"桃仙閣", "https://www.facebook.com/tousenkaku/"],
        [[35.5149708, 133.1909399],	"うなぎ処 山美世", "https://www.facebook.com/yamamise/"],
        [[35.4645884, 133.0609068],	"山芳ばる", "https://www.facebook.com/8044bar/"],
        [[35.4693721, 133.0511908],	"喫茶MG", "http://www.kissa-mg.com/"],
        [[35.4762453, 133.0553938],	"紅茶専門店Pungency", "https://www.facebook.com/紅茶専門店Pungency-1397825816955129/"],
        [[35.469720, 133.054857],	"蒼の音", "https://www.facebook.com/蒼の音-1602828466530702/"],
        
        [[35.479672, 133.045914],	"京らぎ 黒田店", "https://www.facebook.com/kyoragi.kuroda/"],
        [[35.469376, 133.054377],	"創作中華 パパ厨房", "https://www.facebook.com/papachuu/"],
        [[35.466143, 133.0598808],	"酒とさかな でろ", "https://www.facebook.com/deromatsue/"],
        [[35.4708019, 133.0540227],	"KARLY", "https://karly.jp"],
        [[35.4640186, 133.0542759],	"メルモのおやつ", "https://www.facebook.com/メルモのおやつ-377985305625329/"],
        [[35.4703235, 133.0681255],	"スカラベ136", "https://www.facebook.com/cafeScarab/"],
        [[35.4696387, 133.0469897],	"バンブー カフェテリア", "https://tabelog.com/shimane/A3201/A320101/32005904/"],
        [[35.4574903, 133.0678118],	"リストランテ グラッパ", "https://www.facebook.com/RisutoranteGurappa/"],
        [[35.4587852, 133.0608696],	"手打ちそば 東風（こち）", "https://tabelog.com/shimane/A3201/A320101/32004237/"],
        [[35.4696079, 133.054515],	"佐香や カラコロ広場店", "https://www.facebook.com/sakaya.karakoro/"],
        
        [[35.4694074, 133.0537399],	"ビストロクール", "https://www.facebook.com/bistrocoeur/"],
        [[35.469367, 133.053896],	"Dining Cello", "https://tabiiro.jp/gourmet/s/309237-matsue-diningcello/"],
        [[35.469270, 133.054497],	"Y's kitchen karakoro", "https://www.facebook.com/yskitchen.matsue/"],
        [[35.4693794, 133.053279],	"浪花寿司", "https://www.facebook.com/pages/浪花寿司/136873296957763"],
        [[35.4658015, 133.0590312],	"Pizzeria UWOZA", "https://www.facebook.com/uwoza/"],
        [[35.4973111, 133.0810347],	"織香瑠", "https://tabelog.com/shimane/A3201/A320101/32001788/"],
        [[35.454253, 133.050659],	"Cafe ailes", "https://www.facebook.com/cafeailes/"],
        [[35.4712538, 133.0553258],	"ぼうげつ", "https://www.facebook.com/bougetsu/"],
        [[35.4735519, 133.0542306],	"Green's Baby（グリーンズベイビー）", "https://www.facebook.com/greensbaby"],
        [[35.4621815, 133.0580281],	"カメノ食堂", "https://www.facebook.com/kamekamekameno"],
        
        [[35.4649835, 133.0601285], "地産地相酒場 たかの屋", "https://tabelog.com/shimane/A3201/A320101/32004702/"],
        [[35.4635977,133.0595794],	"Japanesque", "https://www.facebook.com/Japanesque-307584292731524"],
        [[35.4637104,133.0589293],	"誘酒庵", "https://www.facebook.com/jizakeyushuan"],
        [[35.4590541, 133.0830501], "鶏笑 松江東津田店", "https://www.facebook.com/torisho.matsuehigashitsuda"],
        [[35.440263,133.060744],	"ミスター・バーク 松江浜乃木店", "http://www.mr-b.jp/shop04.html"],
        [[35.4651378, 133.0610506],	"海鮮鉄板やまおか食堂", "https://www.facebook.com/海鮮鉄板やまおか食堂-1988999641385629"],
        [[35.4754690, 133.0686863], "旨い とんかつ かつふじ", "https://www.facebook.com/katsufuzi"],
        [[35.4659026, 133.0589821],	"谷屋", "https://www.facebook.com/0sn0292878t432r"],
        [[35.4658345, 133.0599149],	"イタリア料理 Al SOLE","https://www.facebook.com/ItalianoAlSole/"],
        [[35.373385, 132.7359618],	"出雲翠苑", "https://www.facebook.com/izumosuien"]
    ];
    
}
