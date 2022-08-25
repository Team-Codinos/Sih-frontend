export const placehol = [
  "Telangana",
  "Bombay",
  "Kerala",
  "Gujarat",
  "Hyderabad",
];

export let States = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
export const Options = {
  // plotOptions: {
  //   pie: {
  //     donut: {
  //       size: "65%",
  //     },
  //   },
  // },
  labels: ["ELEMENTERY", "HIGHSCHOOL", "TECHNICAL"],
  colors: ["#FFFF00", "#E3242B", "#349beb"],
  chart: {
    width: 320,
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "50%",
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  responsive: [
    {
      breakpoint: 620,
      options: {
        chart: {
          width: 350,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 0,
    height: 630,
  },
};

export const StatesXcolor = [
  {
    State: "an",
    name: "Andaman and Nicobar Islands",
    Color: ["255", "26", "26"],
  },
  { State: "ap", name: "Andhra Pradesh", Color: ["255", "26", "26"] },
  { State: "ar", name: "Arunachal Pradesh", Color: ["255", "26", "26"] },
  { State: "as", name: "Assam", Color: ["255", "26", "26"] },
  { State: "br", name: "Bihar", Color: ["255", "26", "26"] },
  { State: "ch", name: "Chandigarh", Color: ["255", "26", "26"] },
  { State: "ct", name: "Chhattisgarh", Color: ["255", "26", "26"] },
  { State: "dn", name: "Dadra and Nagar Havel", Color: ["255", "26", "26"] },
  { State: "dd", name: "Daman and Diu", Color: ["255", "26", "26"] },
  { State: "dl", name: "Delhi", Color: ["255", "26", "26"] },
  { State: "ga", name: "Goa", Color: ["255", "26", "26"] },
  { State: "gj", name: "Gujarat", Color: ["255", "26", "26"] },
  { State: "hr", name: "Haryana", Color: ["255", "26", "26"] },
  { State: "hp", name: "Himachal Pradesh", Color: ["255", "26", "26"] },
  { State: "jk", name: "Jammu and Kashmir", Color: ["255", "26", "26"] },
  { State: "jh", name: "Jharkhand", Color: ["255", "26", "26"] },
  { State: "ka", name: "Karnataka", Color: ["255", "26", "26"] },
  { State: "kl", name: "Kerala", Color: ["255", "26", "26"] },
  { State: "ld", name: "Lakshadweep", Color: ["255", "26", "26"] },
  { State: "mp", name: "Madhya Pradesh", Color: ["255", "26", "26"] },
  { State: "mh", name: "Maharashtra", Color: ["255", "26", "26"] },
  { State: "mn", name: "Manipur", Color: ["255", "26", "26"] },
  { State: "ml", name: "Meghalaya", Color: ["255", "26", "26"] },
  { State: "mz", name: "Mizoram", Color: ["255", "26", "26"] },
  { State: "nl", name: "Nagaland", Color: ["255", "26", "26"] },
  { State: "or", name: "Odisha", Color: ["255", "26", "26"] },
  { State: "py", name: "Puducherry", Color: ["255", "26", "26"] },
  { State: "pb", name: "Punjab", Color: ["255", "26", "26"] },
  { State: "rj", name: "Rajasthan", Color: ["255", "26", "26"] },
  { State: "sk", name: "Sikkim", Color: ["255", "26", "26"] },
  { State: "tn", name: "Tamil Nadu", Color: ["255", "26", "26"] },
  { State: "tg", name: "Telangana", Color: ["255", "26", "26"] },
  { State: "tr", name: "Tripura", Color: ["255", "26", "26"] },
  { State: "up", name: "Uttar Pradesh", Color: ["255", "26", "26"] },
  { State: "ut", name: "Uttarakhand", Color: ["255", "26", "26"] },
  { State: "wb", name: "West Bengal", Color: ["255", "26", "26"] },
];

export const DropOut = [
  { year: 2000, BOYS: 5, GIRLS: 16, Total: 10 },
  { year: 2001, BOYS: 7, GIRLS: 6, Total: 6 },
  { year: 2002, BOYS: 6, GIRLS: 13, Total: 9 },
  { year: 2003, BOYS: 17, GIRLS: 8, Total: 12 },
  { year: 2004, BOYS: 20, GIRLS: 8, Total: 14 },
  { year: 2005, BOYS: 14, GIRLS: 13, Total: 13 },
  { year: 2006, BOYS: 9, GIRLS: 5, Total: 7 },
  { year: 2007, BOYS: 20, GIRLS: 19, Total: 19 },
  { year: 2008, BOYS: 13, GIRLS: 11, Total: 12 },
  { year: 2009, BOYS: 7, GIRLS: 20, Total: 13 },
  { year: 2010, BOYS: 16, GIRLS: 6, Total: 11 },
  { year: 2011, BOYS: 16, GIRLS: 20, Total: 18 },
  { year: 2012, BOYS: 5, GIRLS: 15, Total: 10 },
  { year: 2013, BOYS: 14, GIRLS: 17, Total: 15 },
  { year: 2014, BOYS: 11, GIRLS: 18, Total: 14 },
  { year: 2015, BOYS: 13, GIRLS: 17, Total: 15 },
  { year: 2016, BOYS: 14, GIRLS: 19, Total: 16 },
  { year: 2017, BOYS: 10, GIRLS: 15, Total: 12 },
  { year: 2018, BOYS: 17, GIRLS: 17, Total: 17 },
  { year: 2019, BOYS: 17, GIRLS: 9, Total: 13 },
  { year: 2020, BOYS: 9, GIRLS: 10, Total: 9 },
  { year: 2021, BOYS: 6, GIRLS: 6, Total: 6 },
  { year: 2022, BOYS: 7, GIRLS: 19, Total: 13 },
];

export const LITracy = [
  { year: 2000, BOYS: 74, GIRLS: 69, Total: 71 },
  { year: 2001, BOYS: 58, GIRLS: 59, Total: 58 },
  { year: 2002, BOYS: 76, GIRLS: 61, Total: 68 },
  { year: 2003, BOYS: 75, GIRLS: 69, Total: 72 },
  { year: 2004, BOYS: 77, GIRLS: 65, Total: 71 },
  { year: 2005, BOYS: 62, GIRLS: 80, Total: 71 },
  { year: 2006, BOYS: 64, GIRLS: 65, Total: 64 },
  { year: 2007, BOYS: 70, GIRLS: 70, Total: 70 },
  { year: 2008, BOYS: 68, GIRLS: 83, Total: 75 },
  { year: 2009, BOYS: 66, GIRLS: 68, Total: 67 },
  { year: 2010, BOYS: 65, GIRLS: 69, Total: 67 },
  { year: 2011, BOYS: 84, GIRLS: 81, Total: 82 },
  { year: 2012, BOYS: 69, GIRLS: 77, Total: 73 },
  { year: 2013, BOYS: 71, GIRLS: 79, Total: 75 },
  { year: 2014, BOYS: 85, GIRLS: 80, Total: 82 },
  { year: 2015, BOYS: 89, GIRLS: 77, Total: 83 },
  { year: 2016, BOYS: 86, GIRLS: 73, Total: 79 },
  { year: 2017, BOYS: 81, GIRLS: 80, Total: 80 },
  { year: 2018, BOYS: 82, GIRLS: 91, Total: 86 },
  { year: 2019, BOYS: 79, GIRLS: 85, Total: 82 },
  { year: 2020, BOYS: 77, GIRLS: 81, Total: 79 },
  { year: 2021, BOYS: 81, GIRLS: 79, Total: 80 },
  { year: 2022, BOYS: 87, GIRLS: 81, Total: 84 },
];

export const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export const LITRACY = [
  { year: 2000, BOYS: 60, GIRLS: 77, Total: 68 },
  { year: 2001, BOYS: 85, GIRLS: 81, Total: 83 },
  { year: 2002, BOYS: 64, GIRLS: 87, Total: 75 },
  { year: 2003, BOYS: 67, GIRLS: 59, Total: 63 },
  { year: 2004, BOYS: 62, GIRLS: 86, Total: 74 },
  { year: 2005, BOYS: 82, GIRLS: 87, Total: 84 },
  { year: 2006, BOYS: 61, GIRLS: 90, Total: 75 },
  { year: 2007, BOYS: 70, GIRLS: 68, Total: 69 },
  { year: 2008, BOYS: 65, GIRLS: 77, Total: 71 },
  { year: 2009, BOYS: 83, GIRLS: 89, Total: 86 },
  { year: 2010, BOYS: 80, GIRLS: 88, Total: 84 },
  { year: 2011, BOYS: 73, GIRLS: 74, Total: 73 },
  { year: 2012, BOYS: 72, GIRLS: 84, Total: 78 },
  { year: 2013, BOYS: 80, GIRLS: 68, Total: 74 },
  { year: 2014, BOYS: 96, GIRLS: 96, Total: 96 },
  { year: 2015, BOYS: 82, GIRLS: 86, Total: 84 },
  { year: 2016, BOYS: 86, GIRLS: 82, Total: 84 },
  { year: 2017, BOYS: 74, GIRLS: 81, Total: 77 },
  { year: 2018, BOYS: 94, GIRLS: 89, Total: 91 },
  { year: 2019, BOYS: 92, GIRLS: 81, Total: 86 },
  { year: 2020, BOYS: 81, GIRLS: 96, Total: 88 },
  { year: 2021, BOYS: 87, GIRLS: 95, Total: 91 },
  { year: 2022, BOYS: 88, GIRLS: 92, Total: 90 },
];

export const TEACHERS = [
  { year: 2000, TEACHERS: 6 },
  { year: 2001, TEACHERS: 6 },
  { year: 2002, TEACHERS: 6 },
  { year: 2003, TEACHERS: 7 },
  { year: 2004, TEACHERS: 7 },
  { year: 2005, TEACHERS: 7 },
  { year: 2006, TEACHERS: 4 },
  { year: 2007, TEACHERS: 7 },
  { year: 2008, TEACHERS: 8 },
  { year: 2009, TEACHERS: 5 },
  { year: 2010, TEACHERS: 9 },
  { year: 2011, TEACHERS: 9 },
  { year: 2012, TEACHERS: 9 },
  { year: 2013, TEACHERS: 9 },
  { year: 2014, TEACHERS: 7 },
  { year: 2015, TEACHERS: 10 },
  { year: 2016, TEACHERS: 10 },
  { year: 2017, TEACHERS: 8 },
  { year: 2018, TEACHERS: 11 },
  { year: 2019, TEACHERS: 10 },
  { year: 2020, TEACHERS: 11 },
  { year: 2021, TEACHERS: 13 },
  { year: 2022, TEACHERS: 13 },
];

export const TableVals = [
  {
    States: "Andhra Pradesh",
    PRIM_STU: 13411283,
    PRIM_TEACH: 16465,
    HIGH_STU: 13692362,
    HIGH_TEA: 10216,
    TECH_STU: 29935232,
    TECH_TEACH: 15529,
  },
  {
    States: "Arunachal Pradesh",
    PRIM_STU: 10753633,
    PRIM_TEACH: 19862,
    HIGH_STU: 16439429,
    HIGH_TEA: 13495,
    TECH_STU: 6237143,
    TECH_TEACH: 14898,
  },
  {
    States: "Assam",
    PRIM_STU: 1057155,
    PRIM_TEACH: 10784,
    HIGH_STU: 9435355,
    HIGH_TEA: 14981,
    TECH_STU: 18726683,
    TECH_TEACH: 12357,
  },
  {
    States: "Bihar",
    PRIM_STU: 7740960,
    PRIM_TEACH: 19554,
    HIGH_STU: 23029216,
    HIGH_TEA: 16558,
    TECH_STU: 21296920,
    TECH_TEACH: 17754,
  },
  {
    States: "Chhattisgarh",
    PRIM_STU: 5132091,
    PRIM_TEACH: 16171,
    HIGH_STU: 16267564,
    HIGH_TEA: 12577,
    TECH_STU: 16589943,
    TECH_TEACH: 12379,
  },
  {
    States: "Goa",
    PRIM_STU: 1557525,
    PRIM_TEACH: 11870,
    HIGH_STU: 7261664,
    HIGH_TEA: 16001,
    TECH_STU: 24867353,
    TECH_TEACH: 16755,
  },
  {
    States: "Gujarat",
    PRIM_STU: 17292971,
    PRIM_TEACH: 11774,
    HIGH_STU: 7788976,
    HIGH_TEA: 18914,
    TECH_STU: 18692918,
    TECH_TEACH: 16780,
  },
  {
    States: "Haryana",
    PRIM_STU: 11769292,
    PRIM_TEACH: 17687,
    HIGH_STU: 26386493,
    HIGH_TEA: 17398,
    TECH_STU: 4540101,
    TECH_TEACH: 15814,
  },
  {
    States: "Himachal Pradesh",
    PRIM_STU: 7281109,
    PRIM_TEACH: 11690,
    HIGH_STU: 10949441,
    HIGH_TEA: 14561,
    TECH_STU: 22599688,
    TECH_TEACH: 12701,
  },
  {
    States: "Jammu and Kashmir",
    PRIM_STU: 17941282,
    PRIM_TEACH: 14704,
    HIGH_STU: 15046439,
    HIGH_TEA: 10843,
    TECH_STU: 11828336,
    TECH_TEACH: 19796,
  },
  {
    States: "Jharkhand",
    PRIM_STU: 5259151,
    PRIM_TEACH: 11273,
    HIGH_STU: 22669017,
    HIGH_TEA: 16978,
    TECH_STU: 19233314,
    TECH_TEACH: 11671,
  },
  {
    States: "Karnataka",
    PRIM_STU: 3903528,
    PRIM_TEACH: 18475,
    HIGH_STU: 20128794,
    HIGH_TEA: 19025,
    TECH_STU: 20994299,
    TECH_TEACH: 14227,
  },
  {
    States: "Kerala",
    PRIM_STU: 18167924,
    PRIM_TEACH: 18656,
    HIGH_STU: 21139615,
    HIGH_TEA: 19520,
    TECH_STU: 26307998,
    TECH_TEACH: 10290,
  },
  {
    States: "Madhya Pradesh",
    PRIM_STU: 18803689,
    PRIM_TEACH: 12534,
    HIGH_STU: 18742456,
    HIGH_TEA: 16956,
    TECH_STU: 6123145,
    TECH_TEACH: 18671,
  },
  {
    States: "Maharashtra",
    PRIM_STU: 3828123,
    PRIM_TEACH: 11437,
    HIGH_STU: 5254434,
    HIGH_TEA: 10712,
    TECH_STU: 11309033,
    TECH_TEACH: 14115,
  },
  {
    States: "Manipur",
    PRIM_STU: 6380248,
    PRIM_TEACH: 10384,
    HIGH_STU: 10739961,
    HIGH_TEA: 16534,
    TECH_STU: 12307919,
    TECH_TEACH: 16798,
  },
  {
    States: "Meghalaya",
    PRIM_STU: 14631843,
    PRIM_TEACH: 12226,
    HIGH_STU: 4958516,
    HIGH_TEA: 12223,
    TECH_STU: 9547159,
    TECH_TEACH: 16099,
  },
  {
    States: "Mizoram",
    PRIM_STU: 19446172,
    PRIM_TEACH: 18066,
    HIGH_STU: 18225273,
    HIGH_TEA: 12010,
    TECH_STU: 19992623,
    TECH_TEACH: 11018,
  },
  {
    States: "Nagaland",
    PRIM_STU: 15191914,
    PRIM_TEACH: 11932,
    HIGH_STU: 15978976,
    HIGH_TEA: 14462,
    TECH_STU: 18733999,
    TECH_TEACH: 14959,
  },
  {
    States: "Odisha",
    PRIM_STU: 14062136,
    PRIM_TEACH: 17347,
    HIGH_STU: 4435026,
    HIGH_TEA: 19753,
    TECH_STU: 26252148,
    TECH_TEACH: 18203,
  },
  {
    States: "Punjab",
    PRIM_STU: 14839312,
    PRIM_TEACH: 18307,
    HIGH_STU: 20134628,
    HIGH_TEA: 11332,
    TECH_STU: 27829565,
    TECH_TEACH: 18228,
  },
  {
    States: "Rajasthan",
    PRIM_STU: 13248978,
    PRIM_TEACH: 12498,
    HIGH_STU: 22109343,
    HIGH_TEA: 13056,
    TECH_STU: 6660841,
    TECH_TEACH: 15257,
  },
  {
    States: "Sikkim",
    PRIM_STU: 13787744,
    PRIM_TEACH: 10594,
    HIGH_STU: 14460902,
    HIGH_TEA: 16246,
    TECH_STU: 10813067,
    TECH_TEACH: 11237,
  },
  {
    States: "Tamil Nadu",
    PRIM_STU: 3788401,
    PRIM_TEACH: 19701,
    HIGH_STU: 17501795,
    HIGH_TEA: 18991,
    TECH_STU: 11347145,
    TECH_TEACH: 16017,
  },
  {
    States: "Telangana",
    PRIM_STU: 19629285,
    PRIM_TEACH: 16489,
    HIGH_STU: 29878223,
    HIGH_TEA: 15190,
    TECH_STU: 8199468,
    TECH_TEACH: 13557,
  },
  {
    States: "Tripura",
    PRIM_STU: 10137538,
    PRIM_TEACH: 19522,
    HIGH_STU: 17247860,
    HIGH_TEA: 14073,
    TECH_STU: 19793993,
    TECH_TEACH: 12940,
  },
  {
    States: "Uttarakhand",
    PRIM_STU: 6582432,
    PRIM_TEACH: 15035,
    HIGH_STU: 6023680,
    HIGH_TEA: 12364,
    TECH_STU: 24886311,
    TECH_TEACH: 17778,
  },
  {
    States: "Uttar Pradesh",
    PRIM_STU: 9882826,
    PRIM_TEACH: 13957,
    HIGH_STU: 11800892,
    HIGH_TEA: 15634,
    TECH_STU: 20791638,
    TECH_TEACH: 18380,
  },
  {
    States: "West Bengal",
    PRIM_STU: 11404716,
    PRIM_TEACH: 19881,
    HIGH_STU: 21656593,
    HIGH_TEA: 16162,
    TECH_STU: 25311092,
    TECH_TEACH: 19520,
  },
  {
    States: "Andaman and Nicobar Islands",
    PRIM_STU: 15204399,
    PRIM_TEACH: 19582,
    HIGH_STU: 12187174,
    HIGH_TEA: 17466,
    TECH_STU: 9368936,
    TECH_TEACH: 17206,
  },
  {
    States: "Chandigarh",
    PRIM_STU: 19551745,
    PRIM_TEACH: 10771,
    HIGH_STU: 22856238,
    HIGH_TEA: 15642,
    TECH_STU: 9436717,
    TECH_TEACH: 19919,
  },
  {
    States: "Dadra and Nagar Haveli",
    PRIM_STU: 10908374,
    PRIM_TEACH: 14518,
    HIGH_STU: 23876643,
    HIGH_TEA: 15197,
    TECH_STU: 21941262,
    TECH_TEACH: 17270,
  },
  {
    States: "Daman and Diu",
    PRIM_STU: 15413710,
    PRIM_TEACH: 10209,
    HIGH_STU: 22293909,
    HIGH_TEA: 18860,
    TECH_STU: 21579210,
    TECH_TEACH: 16134,
  },
  {
    States: "Delhi",
    PRIM_STU: 2205077,
    PRIM_TEACH: 15779,
    HIGH_STU: 9417222,
    HIGH_TEA: 17839,
    TECH_STU: 14508643,
    TECH_TEACH: 15069,
  },
  {
    States: "Lakshadweep",
    PRIM_STU: 9699268,
    PRIM_TEACH: 19790,
    HIGH_STU: 19683029,
    HIGH_TEA: 14888,
    TECH_STU: 10630739,
    TECH_TEACH: 12241,
  },
  {
    States: "Puducherry",
    PRIM_STU: 12792204,
    PRIM_TEACH: 18207,
    HIGH_STU: 8672617,
    HIGH_TEA: 10406,
    TECH_STU: 5859308,
    TECH_TEACH: 12448,
  },
];
export const ENrollTable = [
  {
    States: "Andhra Pradesh",
    PRIM_STU: 84,
    PRIM_TEACH: 88,
    HIGH_STU: 90,
    HIGH_TEA: 79,
    TECH_STU: 79,
    TECH_TEACH: 72,
  },
  {
    States: "Arunachal Pradesh",
    PRIM_STU: 81,
    PRIM_TEACH: 87,
    HIGH_STU: 83,
    HIGH_TEA: 77,
    TECH_STU: 90,
    TECH_TEACH: 78,
  },
  {
    States: "Assam",
    PRIM_STU: 75,
    PRIM_TEACH: 72,
    HIGH_STU: 88,
    HIGH_TEA: 63,
    TECH_STU: 94,
    TECH_TEACH: 75,
  },
  {
    States: "Bihar",
    PRIM_STU: 92,
    PRIM_TEACH: 79,
    HIGH_STU: 95,
    HIGH_TEA: 89,
    TECH_STU: 77,
    TECH_TEACH: 89,
  },
  {
    States: "Chhattisgarh",
    PRIM_STU: 86,
    PRIM_TEACH: 86,
    HIGH_STU: 83,
    HIGH_TEA: 87,
    TECH_STU: 80,
    TECH_TEACH: 73,
  },
  {
    States: "Goa",
    PRIM_STU: 90,
    PRIM_TEACH: 66,
    HIGH_STU: 74,
    HIGH_TEA: 86,
    TECH_STU: 76,
    TECH_TEACH: 77,
  },
  {
    States: "Gujarat",
    PRIM_STU: 78,
    PRIM_TEACH: 83,
    HIGH_STU: 74,
    HIGH_TEA: 60,
    TECH_STU: 78,
    TECH_TEACH: 61,
  },
  {
    States: "Haryana",
    PRIM_STU: 86,
    PRIM_TEACH: 90,
    HIGH_STU: 85,
    HIGH_TEA: 65,
    TECH_STU: 87,
    TECH_TEACH: 65,
  },
  {
    States: "Himachal Pradesh",
    PRIM_STU: 93,
    PRIM_TEACH: 86,
    HIGH_STU: 81,
    HIGH_TEA: 61,
    TECH_STU: 92,
    TECH_TEACH: 83,
  },
  {
    States: "Jammu and Kashmir",
    PRIM_STU: 85,
    PRIM_TEACH: 69,
    HIGH_STU: 93,
    HIGH_TEA: 79,
    TECH_STU: 73,
    TECH_TEACH: 82,
  },
  {
    States: "Jharkhand",
    PRIM_STU: 72,
    PRIM_TEACH: 68,
    HIGH_STU: 89,
    HIGH_TEA: 88,
    TECH_STU: 81,
    TECH_TEACH: 74,
  },
  {
    States: "Karnataka",
    PRIM_STU: 88,
    PRIM_TEACH: 60,
    HIGH_STU: 79,
    HIGH_TEA: 86,
    TECH_STU: 88,
    TECH_TEACH: 74,
  },
  {
    States: "Kerala",
    PRIM_STU: 76,
    PRIM_TEACH: 73,
    HIGH_STU: 91,
    HIGH_TEA: 78,
    TECH_STU: 82,
    TECH_TEACH: 62,
  },
  {
    States: "Madhya Pradesh",
    PRIM_STU: 75,
    PRIM_TEACH: 72,
    HIGH_STU: 78,
    HIGH_TEA: 70,
    TECH_STU: 88,
    TECH_TEACH: 88,
  },
  {
    States: "Maharashtra",
    PRIM_STU: 70,
    PRIM_TEACH: 71,
    HIGH_STU: 91,
    HIGH_TEA: 61,
    TECH_STU: 80,
    TECH_TEACH: 66,
  },
  {
    States: "Manipur",
    PRIM_STU: 80,
    PRIM_TEACH: 80,
    HIGH_STU: 70,
    HIGH_TEA: 74,
    TECH_STU: 70,
    TECH_TEACH: 62,
  },
  {
    States: "Meghalaya",
    PRIM_STU: 78,
    PRIM_TEACH: 81,
    HIGH_STU: 90,
    HIGH_TEA: 62,
    TECH_STU: 92,
    TECH_TEACH: 73,
  },
  {
    States: "Mizoram",
    PRIM_STU: 75,
    PRIM_TEACH: 90,
    HIGH_STU: 74,
    HIGH_TEA: 88,
    TECH_STU: 72,
    TECH_TEACH: 70,
  },
  {
    States: "Nagaland",
    PRIM_STU: 81,
    PRIM_TEACH: 73,
    HIGH_STU: 74,
    HIGH_TEA: 83,
    TECH_STU: 86,
    TECH_TEACH: 75,
  },
  {
    States: "Odisha",
    PRIM_STU: 78,
    PRIM_TEACH: 84,
    HIGH_STU: 74,
    HIGH_TEA: 69,
    TECH_STU: 92,
    TECH_TEACH: 66,
  },
  {
    States: "Punjab",
    PRIM_STU: 84,
    PRIM_TEACH: 84,
    HIGH_STU: 75,
    HIGH_TEA: 61,
    TECH_STU: 75,
    TECH_TEACH: 78,
  },
  {
    States: "Rajasthan",
    PRIM_STU: 86,
    PRIM_TEACH: 74,
    HIGH_STU: 90,
    HIGH_TEA: 84,
    TECH_STU: 80,
    TECH_TEACH: 66,
  },
  {
    States: "Sikkim",
    PRIM_STU: 95,
    PRIM_TEACH: 78,
    HIGH_STU: 90,
    HIGH_TEA: 86,
    TECH_STU: 86,
    TECH_TEACH: 61,
  },
  {
    States: "Tamil Nadu",
    PRIM_STU: 71,
    PRIM_TEACH: 78,
    HIGH_STU: 93,
    HIGH_TEA: 63,
    TECH_STU: 90,
    TECH_TEACH: 82,
  },
  {
    States: "Telangana",
    PRIM_STU: 89,
    PRIM_TEACH: 81,
    HIGH_STU: 91,
    HIGH_TEA: 72,
    TECH_STU: 78,
    TECH_TEACH: 71,
  },
  {
    States: "Tripura",
    PRIM_STU: 88,
    PRIM_TEACH: 80,
    HIGH_STU: 73,
    HIGH_TEA: 78,
    TECH_STU: 80,
    TECH_TEACH: 68,
  },
  {
    States: "Uttarakhand",
    PRIM_STU: 79,
    PRIM_TEACH: 77,
    HIGH_STU: 80,
    HIGH_TEA: 70,
    TECH_STU: 81,
    TECH_TEACH: 83,
  },
  {
    States: "Uttar Pradesh",
    PRIM_STU: 88,
    PRIM_TEACH: 83,
    HIGH_STU: 79,
    HIGH_TEA: 75,
    TECH_STU: 86,
    TECH_TEACH: 82,
  },
  {
    States: "West Bengal",
    PRIM_STU: 70,
    PRIM_TEACH: 69,
    HIGH_STU: 78,
    HIGH_TEA: 82,
    TECH_STU: 95,
    TECH_TEACH: 70,
  },
  {
    States: "Andaman and Nicobar Islands",
    PRIM_STU: 82,
    PRIM_TEACH: 90,
    HIGH_STU: 79,
    HIGH_TEA: 85,
    TECH_STU: 93,
    TECH_TEACH: 64,
  },
  {
    States: "Chandigarh",
    PRIM_STU: 93,
    PRIM_TEACH: 61,
    HIGH_STU: 81,
    HIGH_TEA: 74,
    TECH_STU: 85,
    TECH_TEACH: 64,
  },
  {
    States: "Dadra and Nagar Haveli",
    PRIM_STU: 84,
    PRIM_TEACH: 90,
    HIGH_STU: 81,
    HIGH_TEA: 88,
    TECH_STU: 91,
    TECH_TEACH: 60,
  },
  {
    States: "Daman and Diu",
    PRIM_STU: 77,
    PRIM_TEACH: 81,
    HIGH_STU: 76,
    HIGH_TEA: 75,
    TECH_STU: 78,
    TECH_TEACH: 84,
  },
  {
    States: "Delhi",
    PRIM_STU: 75,
    PRIM_TEACH: 89,
    HIGH_STU: 78,
    HIGH_TEA: 71,
    TECH_STU: 75,
    TECH_TEACH: 78,
  },
  {
    States: "Lakshadweep",
    PRIM_STU: 87,
    PRIM_TEACH: 63,
    HIGH_STU: 84,
    HIGH_TEA: 78,
    TECH_STU: 75,
    TECH_TEACH: 63,
  },
  {
    States: "Puducherry",
    PRIM_STU: 90,
    PRIM_TEACH: 90,
    HIGH_STU: 86,
    HIGH_TEA: 71,
    TECH_STU: 92,
    TECH_TEACH: 62,
  },
];
