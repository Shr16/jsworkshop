//Init select inputs
(function($){

$('select').material_select();


//Searcher
$( "#search" ).keyup(function( event ) {
  var value = $(this).val();
  if ( event.which == 13 ) {
     event.preventDefault();
  }
  //console.log("Filter..."+value);
  //renderCards(filterByAttr("title",value, data));
  renderCards(applyFilters());
});

function applyTitleFilter(data){
  var value = $('#search').val();
  return filterByAttr("title",value, data);
}

function filterByAttr(attr, value, data) {
  console.log(attr,value);
  var value = value.toLowerCase();
  return $.grep(data, function(n, i) {
    return n[attr].toLowerCase().indexOf(value) != -1;

  });
}

function addToCart(productid){
    cartItems = new Array();
    if (sessionStorage.getItem("cartItems") === null) {
        cartItmes.push(productid);
      }
    else{
        cartItems = sessionStorage.getItem("cartItems");
        cartItems.push(productid);
    }
    sessionStorage.setItem("cartItems",cartItems);
    carta = sessionStorage.getItem("cartItems");
    console.log(carta);
    console.log(cartItems);
   
}


function renderCards(data) {
  console.log("RENDERING");
  var html = '';
  $.each(data, function(key, value) {
    console.log(value);
    html += '<div class="col s12 m6 l4"><div class="card"><div class="card-content white-text"><div class="card-image"><img src="'+ value.image+'"></div><div class="card__meta"><a href="#"><b>Rs.&nbsp;</b><i>' + value.price + '/-</i> </a></div><span class="card-title grey-text text-darken-4">' + value.title + '</span><p class="card-subtitle grey-text text-darken-2">' + value.description + '</p><span class="text-darken-2 card-info"><i class="small material-icons">label</i>&nbsp;' + value.styles + '</span></div><div class="card-action"><a href="#" class="card-action-right" onclick="addToCart('+value.id+')"><i class="material-icons">&nbsp;add_shopping_cart</i>ADD TO CART</a> </div></div>';

    html += '</div>';
  });
  $('#card-container').html(html);

}

//DATA:
var data = [{
  "id" : 0,
  "title": "WD Elements 2.5 inch 1 TB External HDD  (Black)",
  "capacity": "1TB",
  "country": "India",
  "brand": "Western Digital",
  "image": "../images/wd-elements-original-imadmhegj4jkaghs.jpeg",
  "country-code": "IN",
  "product_type": "External HDD",
  "email": "info@earnestek.com",
  "web": "https://www.flipkart.com/wd-elements-2-5-inch-1-tb-external-hard-drive/p/itmdmhdqfhr4ndhq?pid=ACCDMHDQJHVRPYAN&lid=LSTACCDMHDQJHVRPYANAOZZLA&marketplace=FLIPKART&srno=b_1_1&otracker=clp_metro_expandable_2_hardd-categ-26eb9_WD_external-hard-disk-store_WQD0Q2NFDK_wp3&fm=neo/merchandising&iid=e1d9daa6-44a6-4ee4-8c68-019ebdc038ff.ACCDMHDQJHVRPYAN.SEARCH&ppt=Store%20Browse&ppn=Search%20Page",
  "price": "3799",
  "styles": [
    "laptop",
    "2.5"
  ],
  "description": "This hard drive has a storage capacity of 1 TB that’s sufficient for storing your college graduation day pictures, some of your favourite videos, movies and other personal files. "
}, {
    "id" : 1,
    "title": "WD My Passport 2 TB Wired External HDD (Yellow)",
    "capacity": "2TB",
    "country": "India",
    "brand": "Western Digital",
    "image": "../images/wd-20ezrz-original-imaebyrjkeh4ctpk.jpeg",
    "country-code": "IN",
    "product_type": "External HDD",
    "email": "info@earnestek.com",
    "web": "https://www.flipkart.com/wd-elements-2-5-inch-1-tb-external-hard-drive/p/itmdmhdqfhr4ndhq?pid=ACCDMHDQJHVRPYAN&lid=LSTACCDMHDQJHVRPYANAOZZLA&marketplace=FLIPKART&srno=b_1_1&otracker=clp_metro_expandable_2_hardd-categ-26eb9_WD_external-hard-disk-store_WQD0Q2NFDK_wp3&fm=neo/merchandising&iid=e1d9daa6-44a6-4ee4-8c68-019ebdc038ff.ACCDMHDQJHVRPYAN.SEARCH&ppt=Store%20Browse&ppn=Search%20Page",
    "price": "5799",
    "styles": [
      "laptop",
      "2.5"
    ],
    "description": "This hard drive has a storage capacity of 1 TB that’s sufficient for storing your college graduation day pictures, some of your favourite videos, movies and other personal files. "
  }, {
    "id" : 3,
    "title": "WD My Passport 1 TB Wired External HDD (BLUE)",
    "capacity": "1TB",
    "country": "India",
    "brand": "Western Digital",
    "image": "../images/wd-20ezrz-original-imaebyrjkeh4ctpk.jpeg",
    "country-code": "IN",
    "product_type": "External HDD",
    "email": "info@earnestek.com",
    "web": "https://www.flipkart.com/wd-elements-2-5-inch-1-tb-external-hard-drive/p/itmdmhdqfhr4ndhq?pid=ACCDMHDQJHVRPYAN&lid=LSTACCDMHDQJHVRPYANAOZZLA&marketplace=FLIPKART&srno=b_1_1&otracker=clp_metro_expandable_2_hardd-categ-26eb9_WD_external-hard-disk-store_WQD0Q2NFDK_wp3&fm=neo/merchandising&iid=e1d9daa6-44a6-4ee4-8c68-019ebdc038ff.ACCDMHDQJHVRPYAN.SEARCH&ppt=Store%20Browse&ppn=Search%20Page",
    "price": "4799",
    "styles": [
      "Desktop",
      "3.5"
    ],
    "description": "This hard drive has a storage capacity of 1 TB that’s sufficient for storing your college graduation day pictures, some of your favourite videos, movies and other personal files. "
  },  {
    "id" : 4,
    "title": "WD 500 GB Laptop Internal HDD (WD5000LPCX)",
    "capacity": "1TB",
    "country": "India",
    "brand": "Seagate",
    "image": "../images/wd-20ezrz-original-imaebyrjkeh4ctpk.jpeg",
    "country-code": "IN",
    "product_type": "Internal HDD",
    "email": "info@earnestek.com",
    "web": "https://www.flipkart.com/wd-elements-2-5-inch-1-tb-external-hard-drive/p/itmdmhdqfhr4ndhq?pid=ACCDMHDQJHVRPYAN&lid=LSTACCDMHDQJHVRPYANAOZZLA&marketplace=FLIPKART&srno=b_1_1&otracker=clp_metro_expandable_2_hardd-categ-26eb9_WD_external-hard-disk-store_WQD0Q2NFDK_wp3&fm=neo/merchandising&iid=e1d9daa6-44a6-4ee4-8c68-019ebdc038ff.ACCDMHDQJHVRPYAN.SEARCH&ppt=Store%20Browse&ppn=Search%20Page",
    "price": "2799",
    "styles": [
      "laptop",
      "2.5"
    ],
    "description": "This hard drive has a storage capacity of 1 TB that’s sufficient for storing your college graduation day pictures, some of your favourite videos, movies and other personal files. "
  }, {
    "id" : 5,
    "title": "Wd Blue 2 TB Desktop Internal Hard Disk Drive (20ezrz)",
    "capacity": "2TB",
    "country": "India",
    "brand": "Western Digital",
    "image": "../images/wd-20ezrz-original-imaebyrjkeh4ctpk.jpeg",
    "country-code": "IN",
    "product_type": "Internal HDD",
    "email": "info@earnestek.com",
    "web": "https://www.flipkart.com/wd-elements-2-5-inch-1-tb-external-hard-drive/p/itmdmhdqfhr4ndhq?pid=ACCDMHDQJHVRPYAN&lid=LSTACCDMHDQJHVRPYANAOZZLA&marketplace=FLIPKART&srno=b_1_1&otracker=clp_metro_expandable_2_hardd-categ-26eb9_WD_external-hard-disk-store_WQD0Q2NFDK_wp3&fm=neo/merchandising&iid=e1d9daa6-44a6-4ee4-8c68-019ebdc038ff.ACCDMHDQJHVRPYAN.SEARCH&ppt=Store%20Browse&ppn=Search%20Page",
    "price": "2799",
    "styles": [
      "desktop",
      "3.5"
    ],
    "description": "This hard drive has a storage capacity of 1 TB that’s sufficient for storing your college graduation day pictures, some of your favourite videos, movies and other personal files. "
  },{
    "id" : 6,
    "title": "WD 500 GB Laptop Internal HDD (WD5000LPCX)",
    "capacity": "1TB",
    "country": "India",
    "brand": "Seagate",
    "image": "../images/wd-20ezrz-original-imaebyrjkeh4ctpk.jpeg",
    "country-code": "IN",
    "product_type": "Internal HDD",
    "email": "info@earnestek.com",
    "web": "https://www.flipkart.com/wd-elements-2-5-inch-1-tb-external-hard-drive/p/itmdmhdqfhr4ndhq?pid=ACCDMHDQJHVRPYAN&lid=LSTACCDMHDQJHVRPYANAOZZLA&marketplace=FLIPKART&srno=b_1_1&otracker=clp_metro_expandable_2_hardd-categ-26eb9_WD_external-hard-disk-store_WQD0Q2NFDK_wp3&fm=neo/merchandising&iid=e1d9daa6-44a6-4ee4-8c68-019ebdc038ff.ACCDMHDQJHVRPYAN.SEARCH&ppt=Store%20Browse&ppn=Search%20Page",
    "price": "2799",
    "styles": [
      "laptop",
      "2.5"
    ],
    "description": "This hard drive has a storage capacity of 1 TB that’s sufficient for storing your college graduation day pictures, some of your favourite videos, movies and other personal files. "
  }];

renderCards(data);

var countries = [ 
  {name: 'Afghanistan', code: 'AF'}, 
  {name: 'Åland Islands', code: 'AX'}, 
  {name: 'Albania', code: 'AL'}, 
  {name: 'Algeria', code: 'DZ'}, 
  {name: 'American Samoa', code: 'AS'}, 
  {name: 'AndorrA', code: 'AD'}, 
  {name: 'Angola', code: 'AO'}, 
  {name: 'Anguilla', code: 'AI'}, 
  {name: 'Antarctica', code: 'AQ'}, 
  {name: 'Antigua and Barbuda', code: 'AG'}, 
  {name: 'Argentina', code: 'AR'}, 
  {name: 'Armenia', code: 'AM'}, 
  {name: 'Aruba', code: 'AW'}, 
  {name: 'Australia', code: 'AU'}, 
  {name: 'Austria', code: 'AT'}, 
  {name: 'Azerbaijan', code: 'AZ'}, 
  {name: 'Bahamas', code: 'BS'}, 
  {name: 'Bahrain', code: 'BH'}, 
  {name: 'Bangladesh', code: 'BD'}, 
  {name: 'Barbados', code: 'BB'}, 
  {name: 'Belarus', code: 'BY'}, 
  {name: 'Belgium', code: 'BE'}, 
  {name: 'Belize', code: 'BZ'}, 
  {name: 'Benin', code: 'BJ'}, 
  {name: 'Bermuda', code: 'BM'}, 
  {name: 'Bhutan', code: 'BT'}, 
  {name: 'Bolivia', code: 'BO'}, 
  {name: 'Bosnia and Herzegovina', code: 'BA'}, 
  {name: 'Botswana', code: 'BW'}, 
  {name: 'Bouvet Island', code: 'BV'}, 
  {name: 'Brazil', code: 'BR'}, 
  {name: 'British Indian Ocean Territory', code: 'IO'}, 
  {name: 'Brunei Darussalam', code: 'BN'}, 
  {name: 'Bulgaria', code: 'BG'}, 
  {name: 'Burkina Faso', code: 'BF'}, 
  {name: 'Burundi', code: 'BI'}, 
  {name: 'Cambodia', code: 'KH'}, 
  {name: 'Cameroon', code: 'CM'}, 
  {name: 'Canada', code: 'CA'}, 
  {name: 'Cape Verde', code: 'CV'}, 
  {name: 'Cayman Islands', code: 'KY'}, 
  {name: 'Central African Republic', code: 'CF'}, 
  {name: 'Chad', code: 'TD'}, 
  {name: 'Chile', code: 'CL'}, 
  {name: 'China', code: 'CN'}, 
  {name: 'Christmas Island', code: 'CX'}, 
  {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
  {name: 'Colombia', code: 'CO'}, 
  {name: 'Comoros', code: 'KM'}, 
  {name: 'Congo', code: 'CG'}, 
  {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
  {name: 'Cook Islands', code: 'CK'}, 
  {name: 'Costa Rica', code: 'CR'}, 
  {name: 'Cote D\'Ivoire', code: 'CI'}, 
  {name: 'Croatia', code: 'HR'}, 
  {name: 'Cuba', code: 'CU'}, 
  {name: 'Cyprus', code: 'CY'}, 
  {name: 'Czech Republic', code: 'CZ'}, 
  {name: 'Denmark', code: 'DK'}, 
  {name: 'Djibouti', code: 'DJ'}, 
  {name: 'Dominica', code: 'DM'}, 
  {name: 'Dominican Republic', code: 'DO'}, 
  {name: 'Ecuador', code: 'EC'}, 
  {name: 'Egypt', code: 'EG'}, 
  {name: 'El Salvador', code: 'SV'}, 
  {name: 'Equatorial Guinea', code: 'GQ'}, 
  {name: 'Eritrea', code: 'ER'}, 
  {name: 'Estonia', code: 'EE'}, 
  {name: 'Ethiopia', code: 'ET'}, 
  {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
  {name: 'Faroe Islands', code: 'FO'}, 
  {name: 'Fiji', code: 'FJ'}, 
  {name: 'Finland', code: 'FI'}, 
  {name: 'France', code: 'FR'}, 
  {name: 'French Guiana', code: 'GF'}, 
  {name: 'French Polynesia', code: 'PF'}, 
  {name: 'French Southern Territories', code: 'TF'}, 
  {name: 'Gabon', code: 'GA'}, 
  {name: 'Gambia', code: 'GM'}, 
  {name: 'Georgia', code: 'GE'}, 
  {name: 'Germany', code: 'DE'}, 
  {name: 'Ghana', code: 'GH'}, 
  {name: 'Gibraltar', code: 'GI'}, 
  {name: 'Greece', code: 'GR'}, 
  {name: 'Greenland', code: 'GL'}, 
  {name: 'Grenada', code: 'GD'}, 
  {name: 'Guadeloupe', code: 'GP'}, 
  {name: 'Guam', code: 'GU'}, 
  {name: 'Guatemala', code: 'GT'}, 
  {name: 'Guernsey', code: 'GG'}, 
  {name: 'Guinea', code: 'GN'}, 
  {name: 'Guinea-Bissau', code: 'GW'}, 
  {name: 'Guyana', code: 'GY'}, 
  {name: 'Haiti', code: 'HT'}, 
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
  {name: 'Holy See (Vatican City State)', code: 'VA'}, 
  {name: 'Honduras', code: 'HN'}, 
  {name: 'Hong Kong', code: 'HK'}, 
  {name: 'Hungary', code: 'HU'}, 
  {name: 'Iceland', code: 'IS'}, 
  {name: 'India', code: 'IN'}, 
  {name: 'Indonesia', code: 'ID'}, 
  {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
  {name: 'Iraq', code: 'IQ'}, 
  {name: 'Ireland', code: 'IE'}, 
  {name: 'Isle of Man', code: 'IM'}, 
  {name: 'Israel', code: 'IL'}, 
  {name: 'Italy', code: 'IT'}, 
  {name: 'Jamaica', code: 'JM'}, 
  {name: 'Japan', code: 'JP'}, 
  {name: 'Jersey', code: 'JE'}, 
  {name: 'Jordan', code: 'JO'}, 
  {name: 'Kazakhstan', code: 'KZ'}, 
  {name: 'Kenya', code: 'KE'}, 
  {name: 'Kiribati', code: 'KI'}, 
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
  {name: 'Korea, Republic of', code: 'KR'}, 
  {name: 'Kuwait', code: 'KW'}, 
  {name: 'Kyrgyzstan', code: 'KG'}, 
  {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
  {name: 'Latvia', code: 'LV'}, 
  {name: 'Lebanon', code: 'LB'}, 
  {name: 'Lesotho', code: 'LS'}, 
  {name: 'Liberia', code: 'LR'}, 
  {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
  {name: 'Liechtenstein', code: 'LI'}, 
  {name: 'Lithuania', code: 'LT'}, 
  {name: 'Luxembourg', code: 'LU'}, 
  {name: 'Macao', code: 'MO'}, 
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
  {name: 'Madagascar', code: 'MG'}, 
  {name: 'Malawi', code: 'MW'}, 
  {name: 'Malaysia', code: 'MY'}, 
  {name: 'Maldives', code: 'MV'}, 
  {name: 'Mali', code: 'ML'}, 
  {name: 'Malta', code: 'MT'}, 
  {name: 'Marshall Islands', code: 'MH'}, 
  {name: 'Martinique', code: 'MQ'}, 
  {name: 'Mauritania', code: 'MR'}, 
  {name: 'Mauritius', code: 'MU'}, 
  {name: 'Mayotte', code: 'YT'}, 
  {name: 'Mexico', code: 'MX'}, 
  {name: 'Micronesia, Federated States of', code: 'FM'}, 
  {name: 'Moldova, Republic of', code: 'MD'}, 
  {name: 'Monaco', code: 'MC'}, 
  {name: 'Mongolia', code: 'MN'}, 
  {name: 'Montserrat', code: 'MS'}, 
  {name: 'Morocco', code: 'MA'}, 
  {name: 'Mozambique', code: 'MZ'}, 
  {name: 'Myanmar', code: 'MM'}, 
  {name: 'Namibia', code: 'NA'}, 
  {name: 'Nauru', code: 'NR'}, 
  {name: 'Nepal', code: 'NP'}, 
  {name: 'Netherlands', code: 'NL'}, 
  {name: 'Netherlands Antilles', code: 'AN'}, 
  {name: 'New Caledonia', code: 'NC'}, 
  {name: 'New Zealand', code: 'NZ'}, 
  {name: 'Nicaragua', code: 'NI'}, 
  {name: 'Niger', code: 'NE'}, 
  {name: 'Nigeria', code: 'NG'}, 
  {name: 'Niue', code: 'NU'}, 
  {name: 'Norfolk Island', code: 'NF'}, 
  {name: 'Northern Mariana Islands', code: 'MP'}, 
  {name: 'Norway', code: 'NO'}, 
  {name: 'Oman', code: 'OM'}, 
  {name: 'Pakistan', code: 'PK'}, 
  {name: 'Palau', code: 'PW'}, 
  {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
  {name: 'Panama', code: 'PA'}, 
  {name: 'Papua New Guinea', code: 'PG'}, 
  {name: 'Paraguay', code: 'PY'}, 
  {name: 'Peru', code: 'PE'}, 
  {name: 'Philippines', code: 'PH'}, 
  {name: 'Pitcairn', code: 'PN'}, 
  {name: 'Poland', code: 'PL'}, 
  {name: 'Portugal', code: 'PT'}, 
  {name: 'Puerto Rico', code: 'PR'}, 
  {name: 'Qatar', code: 'QA'}, 
  {name: 'Reunion', code: 'RE'}, 
  {name: 'Romania', code: 'RO'}, 
  {name: 'Russian Federation', code: 'RU'}, 
  {name: 'RWANDA', code: 'RW'}, 
  {name: 'Saint Helena', code: 'SH'}, 
  {name: 'Saint Kitts and Nevis', code: 'KN'}, 
  {name: 'Saint Lucia', code: 'LC'}, 
  {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
  {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
  {name: 'Samoa', code: 'WS'}, 
  {name: 'San Marino', code: 'SM'}, 
  {name: 'Sao Tome and Principe', code: 'ST'}, 
  {name: 'Saudi Arabia', code: 'SA'}, 
  {name: 'Senegal', code: 'SN'}, 
  {name: 'Serbia and Montenegro', code: 'CS'}, 
  {name: 'Seychelles', code: 'SC'}, 
  {name: 'Sierra Leone', code: 'SL'}, 
  {name: 'Singapore', code: 'SG'}, 
  {name: 'Slovakia', code: 'SK'}, 
  {name: 'Slovenia', code: 'SI'}, 
  {name: 'Solomon Islands', code: 'SB'}, 
  {name: 'Somalia', code: 'SO'}, 
  {name: 'South Africa', code: 'ZA'}, 
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
  {name: 'Spain', code: 'ES'}, 
  {name: 'Sri Lanka', code: 'LK'}, 
  {name: 'Sudan', code: 'SD'}, 
  {name: 'Suriname', code: 'SR'}, 
  {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
  {name: 'Swaziland', code: 'SZ'}, 
  {name: 'Sweden', code: 'SE'}, 
  {name: 'Switzerland', code: 'CH'}, 
  {name: 'Syrian Arab Republic', code: 'SY'}, 
  {name: 'Taiwan, Province of China', code: 'TW'}, 
  {name: 'Tajikistan', code: 'TJ'}, 
  {name: 'Tanzania, United Republic of', code: 'TZ'}, 
  {name: 'Thailand', code: 'TH'}, 
  {name: 'Timor-Leste', code: 'TL'}, 
  {name: 'Togo', code: 'TG'}, 
  {name: 'Tokelau', code: 'TK'}, 
  {name: 'Tonga', code: 'TO'}, 
  {name: 'Trinidad and Tobago', code: 'TT'}, 
  {name: 'Tunisia', code: 'TN'}, 
  {name: 'Turkey', code: 'TR'}, 
  {name: 'Turkmenistan', code: 'TM'}, 
  {name: 'Turks and Caicos Islands', code: 'TC'}, 
  {name: 'Tuvalu', code: 'TV'}, 
  {name: 'Uganda', code: 'UG'}, 
  {name: 'Ukraine', code: 'UA'}, 
  {name: 'United Arab Emirates', code: 'AE'}, 
  {name: 'United Kingdom', code: 'GB'}, 
  {name: 'United States', code: 'US'}, 
  {name: 'United States Minor Outlying Islands', code: 'UM'}, 
  {name: 'Uruguay', code: 'UY'}, 
  {name: 'Uzbekistan', code: 'UZ'}, 
  {name: 'Vanuatu', code: 'VU'}, 
  {name: 'Venezuela', code: 'VE'}, 
  {name: 'Viet Nam', code: 'VN'}, 
  {name: 'Virgin Islands, British', code: 'VG'}, 
  {name: 'Virgin Islands, U.S.', code: 'VI'}, 
  {name: 'Wallis and Futuna', code: 'WF'}, 
  {name: 'Western Sahara', code: 'EH'}, 
  {name: 'Yemen', code: 'YE'}, 
  {name: 'Zambia', code: 'ZM'}, 
  {name: 'Zimbabwe', code: 'ZW'} 
];

function initCountrySelect(){
  var selectHTML = $('#country-select');
  selectHTML.append($('<option>', { 
          value: 'all',
          text : 'All' 
      }));
  $.each(countries, function (i, item) {
      
      selectHTML.append($('<option>', { 
          value: item.code,
          text : item.name 
      }));
  });
  selectHTML.material_select();
}
initCountrySelect();

//FILTER EVENTS:
$("#country-select").on('change', function() {
  var value = $(this).val();
  console.log("Filter COUNTRY: "+value);
  renderCards(applyFilters());
  //renderCards(filterByAttr("country-code", value, data));
});

$(".product-type-filter").change(function() {
  renderCards(applyFilters());
  //renderCards(applyEventTypeFilter());
});

function applyCountryFilter(data){
  var value = $("#country-select").val();
  if (value == 'all'){
    value = '';
  }
  return filterByAttr("country-code", value, data);
}
function applyEventTypeFilter(data){
  var result = [];
      $('input[name="product-type-filter"]:checked').each(function() {
         console.log(this.value); 
         var filtered = filterByAttr("product_type", this.value, data);
        result = mergeJSONObjectsRemovingDuplicates(result,filtered);
      });
  return result;
}

function applyFilters(){
  var eventArray = [];
  
  console.log("FILTERS:");
  console.log($('#search').val());
  console.log($("#country-select").val());
  console.log($('input[name="product-type-filter"]:checked').serialize());
  
  eventArray = applyEventTypeFilter(data);
  eventArray = applyCountryFilter(eventArray);
  eventArray = applyTitleFilter(eventArray);
  return eventArray;
}




//HELPER
function mergeJSONObjectsRemovingDuplicates(arr1, arr2){
  $.merge(arr1, arr2);

  var existingIDs = [];
  arr1 = $.grep(arr1, function(v) {
      if ($.inArray(v.id, existingIDs) !== -1) {
          return false;
      }
      else {
          existingIDs.push(v.id);
          return true;
      }
  });
  return arr1;
}

}(jQuery));