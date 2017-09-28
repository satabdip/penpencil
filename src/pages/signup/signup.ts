import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendsmsPage } from '../sendsms/sendsms';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
 //public countries: any[];
  public countries =['Afghanistan','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua','Argentina','Armenia','Aruba','Ascension','Australia','Australian External Territories','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Barbuda','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia & Herzegovina', 'Botswana','Brazil','British Virgin Islands','Brunei Darussalam','Bulgaria','Burkina Faso',  'Burundi','Cambodia','Cameroon','Canada','Cape Verde Islands','Cayman Islands','Central African Republic','Chad','Chatham Island (New Zealand)','Chile','China (PRC)','Christmas Island','Cocos-KeelingIslands','Colombia','Comoros','Congo','Dem. Rep. of  (former Zaire)','Cook Islands','Costa Rica','Côte dIvoire (Ivory Coast)','Croatia','Cuba','Cuba (Guantanamo Bay)','Curaçao','Cyprus','Czech Republic','Denmark','Diego Garcia','Djibouti','Dominica','Dominican Republic','East Timor','Easter Island','Ecuador','Egypt','El Salvador','Ellipso','EMSAT','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands (Malvinas)','Faroe Islands','Fiji Islands','Finland',
'France','French Antilles','French Guiana','French Polynesia','Gabonese Republic',
'Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guantanamo Bay','Guatemala','Guinea-Bissau','Guinea','Guyana','Haiti','Honduras','Hong Kong','Hungary','ICO Global (Mobile Satellite Service)','Iceland','India','Indonesia','Inmarsat (Atlantic Ocean - East)','Inmarsat (Atlantic Ocean - West)',
'Inmarsat (Indian Ocean)','Inmarsat (Pacific Ocean)','Inmarsat SNAC','Iran','Iraq','Ireland','Iridium (Mobile Satellite service)','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea (North)','Korea (South)','Kuwait','Kyrgyz Republic','Laos','Latvia','Lebanon',
'Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia (Former Yugoslav Rep of.)',
'Madagascar','Malawi','Malaysia','Maldives','Mali Republic','Malta','Marshall Islands','Martinique','Mauritania',
'Mauritius','Mayotte Island','Mexico','Micronesia(Federal States of)','Midway Island','Moldova','Monaco',
'Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands',
'Netherlands Antilles','Nevis','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island',
'Northern Marianas Islands','Norway','Oman','Pakistan','Palau','Palestinian Settlements','Panama',
'Papua New Guinea Paraguay','Peru Philippines','Poland','Portugal','Puerto Rico','Qatar','Réunion Island','Romania','Russia','Rwandese Republic','St. Helena','St. Kitts/Nevis','St. Lucia','St. Pierre & Miquelon','St. Vincent & Grenadines','Samoa','San Marino','São Tomé and Principe','Saudi Arabia','Senegal','Serbia','Seychelles Republic','Sierra Leone','Singapore',
'Slovak Republic','Slovenia','Solomon Islands','Somali Democratic Republic','South Africa','Spain','Sri Lanka',
'Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Thuraya (Mobile Satellite service)','Timor Leste','Togolese Republic','Tokelau','Tonga Islands','Trinidad & Tobago','Tunisia','Turkey',
'Turkmenistan','Turks and Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States of America','US Virgin Islands','Universal Personal Telecommunications (UPT)','Uruguay','Uzbekistan','Vanuatu',
'Vatican City','Venezuela','Vietnam','Wake Island','Wallis and Futuna Islands','Yemen','Zambia','Zanzibar','Zimbabwe',
];



  public mobilecodes =['+93','+355','+213','+1-684','+376','+244','+1-264','+672','+1-268','+54','+374','+297','+247','+61','+672','+43','+994','+1-242','+973','+880','+1-246','+1-268','+375','+32','+501','+229','+1-441','+975','+591','+387', '+267','+55','+1-284','+673','+359','+226',  '+257','+855','+237','+1','+238','+1-345','+236','+235','+64','+56','+86','+61-8','+61','+57','+269','+242','+243',
'+682','+506','+225','+385','+53','+5399','+599','+357','+420','+45','+246','+253','+1-767','+1-809 and +1-829','+670',
'+56','+593','+20','+503','+8812','+88213','+240','+291','+372','+251','+500','+298','+679','+358',
'+33','+596','+594','+689','+241','+220','+995','+49','+233','+350','+30','+299','+1-473','+590','+1-671','+5399','+502','+245','+245','+224','+592','+509','+504','+852','+36','+8810','+354','+91','+62','+871','+874','+873','+872','+870','+98','+964','+353','+8816','+972','+39','+1-876','+81','+962','+7','+254','+686','+850','+82','+965','+996','+856','+371','+961',
'+266','+231','+218','+423','+370','+352','+853','+389','+261','+265','+60','+960','+223','+356','+692','+596','+222','+230','+269','+52','+691','+1-808','+373','+377','+976','+382','+1-664','+212','+258','+95','+264','+674','+977','+31','+599','+1-869','+687','+64','+505','+227','+234','+683','+672','+1-670','+47','+968','+92','+680','+970','+507','+675','+595','+51','+63','+48','+351','+1-787 ','+974','+262','+40','+7','+250','+290','+1-869','+1-758','+508','+1-784','+685','+378','+239','+966','+221','+381','+248','+232','+65','+421','+386','+677','+252','+27','+34','+94','+249','+597','+268','+46','+41','+963','+886','+992','+255','+66','+88216','+670','+228','+690','+676','+1-868','+216','+90','+993','+1-649','+688','+256','+380','+971','+44','+1','+1-340','+878','+598','+998','+678',
'+39','+58','+84','+808','+681','+967','+260','+255','+263',

];

flag: String;
phonenumber: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.flag="https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png";
  }

  nextpage()
  {
  this.navCtrl.push(SendsmsPage, {
    phno: this.phonenumber    
});
  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad SignupPage');
  }

}
