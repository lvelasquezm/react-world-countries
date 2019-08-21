import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Title from '../components/Title';
import CountryList from '../components/CountryList/CountryList';

import { messages } from '../../data';

const CustomTitle = styled(Title)`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const countries = [
  {
    "code": "AD",
    "name": "Andorra",
    "languages": [
      {
        "name": "Catalan",
        "native": "Català"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "AF",
    "name": "Afghanistan",
    "languages": [
      {
        "name": "Pashto",
        "native": "پښتو"
      },
      {
        "name": "Uzbek",
        "native": "Ўзбек"
      },
      {
        "name": "Turkmen",
        "native": "Туркмен / تركمن"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "AI",
    "name": "Anguilla",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "AL",
    "name": "Albania",
    "languages": [
      {
        "name": "Albanian",
        "native": "Shqip"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "AM",
    "name": "Armenia",
    "languages": [
      {
        "name": "Armenian",
        "native": "Հայերեն"
      },
      {
        "name": "Russian",
        "native": "Русский"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "AO",
    "name": "Angola",
    "languages": [
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "AQ",
    "name": "Antarctica",
    "languages": [],
    "continent": {
      "code": "AN",
      "name": "Antarctica"
    }
  },
  {
    "code": "AR",
    "name": "Argentina",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      },
      {
        "name": "Guarani",
        "native": "Avañe'ẽ"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "AS",
    "name": "American Samoa",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Samoan",
        "native": "Gagana Samoa"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "AT",
    "name": "Austria",
    "languages": [
      {
        "name": "German",
        "native": "Deutsch"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "AU",
    "name": "Australia",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "AW",
    "name": "Aruba",
    "languages": [
      {
        "name": "Dutch",
        "native": "Nederlands"
      },
      {
        "name": "Panjabi / Punjabi",
        "native": "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "AX",
    "name": "Åland",
    "languages": [
      {
        "name": "Swedish",
        "native": "Svenska"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "AZ",
    "name": "Azerbaijan",
    "languages": [
      {
        "name": "Azerbaijani",
        "native": "Azərbaycanca / آذربايجان"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "languages": [
      {
        "name": "Bosnian",
        "native": "Bosanski"
      },
      {
        "name": "Croatian",
        "native": "Hrvatski"
      },
      {
        "name": "Serbian",
        "native": "Српски"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "BB",
    "name": "Barbados",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "BD",
    "name": "Bangladesh",
    "languages": [
      {
        "name": "Bengali",
        "native": "বাংলা"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "BE",
    "name": "Belgium",
    "languages": [
      {
        "name": "Dutch",
        "native": "Nederlands"
      },
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "German",
        "native": "Deutsch"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Peul",
        "native": "Fulfulde"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "languages": [
      {
        "name": "Bulgarian",
        "native": "Български"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "BI",
    "name": "Burundi",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Kirundi",
        "native": "Kirundi"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "BJ",
    "name": "Benin",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "BL",
    "name": "Saint Barthélemy",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "BM",
    "name": "Bermuda",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "BN",
    "name": "Brunei",
    "languages": [
      {
        "name": "Malay",
        "native": "Bahasa Melayu"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "BO",
    "name": "Bolivia",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      },
      {
        "name": "Aymara",
        "native": "Aymar"
      },
      {
        "name": "Quechua",
        "native": "Runa Simi"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "BQ",
    "name": "Bonaire",
    "languages": [
      {
        "name": "Dutch",
        "native": "Nederlands"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "BR",
    "name": "Brazil",
    "languages": [
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "languages": [
      {
        "name": "Dzongkha",
        "native": "ཇོང་ཁ"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "BV",
    "name": "Bouvet Island",
    "languages": [
      {
        "name": "Norwegian",
        "native": "Norsk (bokmål / riksmål)"
      },
      {
        "name": null,
        "native": null
      },
      {
        "name": "Norwegian Nynorsk",
        "native": "Norsk (nynorsk)"
      }
    ],
    "continent": {
      "code": "AN",
      "name": "Antarctica"
    }
  },
  {
    "code": "BW",
    "name": "Botswana",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Tswana",
        "native": "Setswana"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "BY",
    "name": "Belarus",
    "languages": [
      {
        "name": "Belarusian",
        "native": "Беларуская"
      },
      {
        "name": "Russian",
        "native": "Русский"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "BZ",
    "name": "Belize",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "CA",
    "name": "Canada",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "CC",
    "name": "Cocos [Keeling] Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "CD",
    "name": "Democratic Republic of the Congo",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Lingala",
        "native": "Lingála"
      },
      {
        "name": "Kongo",
        "native": "KiKongo"
      },
      {
        "name": "Swahili",
        "native": "Kiswahili"
      },
      {
        "name": null,
        "native": null
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "CF",
    "name": "Central African Republic",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Sango",
        "native": "Sängö"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "CG",
    "name": "Republic of the Congo",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Lingala",
        "native": "Lingála"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "languages": [
      {
        "name": "German",
        "native": "Deutsch"
      },
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Italian",
        "native": "Italiano"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "CI",
    "name": "Ivory Coast",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "CL",
    "name": "Chile",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "CN",
    "name": "China",
    "languages": [
      {
        "name": "Chinese",
        "native": "中文"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "CO",
    "name": "Colombia",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "CU",
    "name": "Cuba",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "CV",
    "name": "Cape Verde",
    "languages": [
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "CW",
    "name": "Curacao",
    "languages": [
      {
        "name": "Dutch",
        "native": "Nederlands"
      },
      {
        "name": "Panjabi / Punjabi",
        "native": "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "CX",
    "name": "Christmas Island",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "languages": [
      {
        "name": "Greek",
        "native": "Ελληνικά"
      },
      {
        "name": "Turkish",
        "native": "Türkçe"
      },
      {
        "name": "Armenian",
        "native": "Հայերեն"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "CZ",
    "name": "Czech Republic",
    "languages": [
      {
        "name": "Czech",
        "native": "Česky"
      },
      {
        "name": "Slovak",
        "native": "Slovenčina"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "DE",
    "name": "Germany",
    "languages": [
      {
        "name": "German",
        "native": "Deutsch"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "DK",
    "name": "Denmark",
    "languages": [
      {
        "name": "Danish",
        "native": "Dansk"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "DM",
    "name": "Dominica",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "DZ",
    "name": "Algeria",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "EE",
    "name": "Estonia",
    "languages": [
      {
        "name": "Estonian",
        "native": "Eesti"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "EG",
    "name": "Egypt",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "EH",
    "name": "Western Sahara",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "languages": [
      {
        "name": "Tigrinya",
        "native": "ትግርኛ"
      },
      {
        "name": "Arabic",
        "native": "العربية"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "ES",
    "name": "Spain",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      },
      {
        "name": "Basque",
        "native": "Euskara"
      },
      {
        "name": "Catalan",
        "native": "Català"
      },
      {
        "name": "Galician",
        "native": "Galego"
      },
      {
        "name": "Occitan",
        "native": "Occitan"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "languages": [
      {
        "name": "Amharic",
        "native": "አማርኛ"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "FI",
    "name": "Finland",
    "languages": [
      {
        "name": "Finnish",
        "native": "Suomi"
      },
      {
        "name": "Swedish",
        "native": "Svenska"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Fijian",
        "native": "Na Vosa Vakaviti"
      },
      {
        "name": "Hindi",
        "native": "हिन्दी"
      },
      {
        "name": "Urdu",
        "native": "اردو"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "FK",
    "name": "Falkland Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "FM",
    "name": "Micronesia",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "languages": [
      {
        "name": "Faroese",
        "native": "Føroyskt"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "FR",
    "name": "France",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "GA",
    "name": "Gabon",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "GD",
    "name": "Grenada",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "GE",
    "name": "Georgia",
    "languages": [
      {
        "name": "Georgian",
        "native": "ქართული"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "GF",
    "name": "French Guiana",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "GG",
    "name": "Guernsey",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "GH",
    "name": "Ghana",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "GL",
    "name": "Greenland",
    "languages": [
      {
        "name": "Greenlandic",
        "native": "Kalaallisut"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "GM",
    "name": "Gambia",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "GN",
    "name": "Guinea",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Peul",
        "native": "Fulfulde"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "GP",
    "name": "Guadeloupe",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "GQ",
    "name": "Equatorial Guinea",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "GR",
    "name": "Greece",
    "languages": [
      {
        "name": "Greek",
        "native": "Ελληνικά"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "GS",
    "name": "South Georgia and the South Sandwich Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AN",
      "name": "Antarctica"
    }
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "GU",
    "name": "Guam",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Chamorro",
        "native": "Chamoru"
      },
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "languages": [
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "GY",
    "name": "Guyana",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "languages": [
      {
        "name": "Chinese",
        "native": "中文"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "HM",
    "name": "Heard Island and McDonald Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AN",
      "name": "Antarctica"
    }
  },
  {
    "code": "HN",
    "name": "Honduras",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "HR",
    "name": "Croatia",
    "languages": [
      {
        "name": "Croatian",
        "native": "Hrvatski"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "HT",
    "name": "Haiti",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Haitian",
        "native": "Krèyol ayisyen"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "HU",
    "name": "Hungary",
    "languages": [
      {
        "name": "Hungarian",
        "native": "Magyar"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "languages": [
      {
        "name": "Indonesian",
        "native": "Bahasa Indonesia"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "IE",
    "name": "Ireland",
    "languages": [
      {
        "name": "Irish",
        "native": "Gaeilge"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "IL",
    "name": "Israel",
    "languages": [
      {
        "name": "Hebrew",
        "native": "עברית"
      },
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "IM",
    "name": "Isle of Man",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Manx",
        "native": "Gaelg"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "IN",
    "name": "India",
    "languages": [
      {
        "name": "Hindi",
        "native": "हिन्दी"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "IO",
    "name": "British Indian Ocean Territory",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "IQ",
    "name": "Iraq",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      },
      {
        "name": "Kurdish",
        "native": "Kurdî / كوردی"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "IR",
    "name": "Iran",
    "languages": [
      {
        "name": "Persian",
        "native": "فارسی"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "IS",
    "name": "Iceland",
    "languages": [
      {
        "name": "Icelandic",
        "native": "Íslenska"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "IT",
    "name": "Italy",
    "languages": [
      {
        "name": "Italian",
        "native": "Italiano"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "JE",
    "name": "Jersey",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "JO",
    "name": "Jordan",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "JP",
    "name": "Japan",
    "languages": [
      {
        "name": "Japanese",
        "native": "日本語"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "KE",
    "name": "Kenya",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Swahili",
        "native": "Kiswahili"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "languages": [
      {
        "name": "Kirghiz",
        "native": "Kırgızca / Кыргызча"
      },
      {
        "name": "Russian",
        "native": "Русский"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "languages": [
      {
        "name": "Cambodian",
        "native": "ភាសាខ្មែរ"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "KM",
    "name": "Comoros",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "KN",
    "name": "Saint Kitts and Nevis",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "KP",
    "name": "North Korea",
    "languages": [
      {
        "name": "Korean",
        "native": "한국어"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "KR",
    "name": "South Korea",
    "languages": [
      {
        "name": "Korean",
        "native": "한국어"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "KY",
    "name": "Cayman Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "languages": [
      {
        "name": "Kazakh",
        "native": "Қазақша"
      },
      {
        "name": "Russian",
        "native": "Русский"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "LA",
    "name": "Laos",
    "languages": [
      {
        "name": "Laotian",
        "native": "ລາວ / Pha xa lao"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "LB",
    "name": "Lebanon",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "LC",
    "name": "Saint Lucia",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "languages": [
      {
        "name": "German",
        "native": "Deutsch"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "languages": [
      {
        "name": "Sinhalese",
        "native": "සිංහල"
      },
      {
        "name": "Tamil",
        "native": "தமிழ்"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "LR",
    "name": "Liberia",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "LS",
    "name": "Lesotho",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Southern Sotho",
        "native": "Sesotho"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "languages": [
      {
        "name": "Lithuanian",
        "native": "Lietuvių"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "German",
        "native": "Deutsch"
      },
      {
        "name": "Luxembourgish",
        "native": "Lëtzebuergesch"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "LV",
    "name": "Latvia",
    "languages": [
      {
        "name": "Latvian",
        "native": "Latviešu"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "LY",
    "name": "Libya",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "MA",
    "name": "Morocco",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "MC",
    "name": "Monaco",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "MD",
    "name": "Moldova",
    "languages": [
      {
        "name": "Romanian",
        "native": "Română"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "languages": [
      {
        "name": "Serbian",
        "native": "Српски"
      },
      {
        "name": "Bosnian",
        "native": "Bosanski"
      },
      {
        "name": "Albanian",
        "native": "Shqip"
      },
      {
        "name": "Croatian",
        "native": "Hrvatski"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "MF",
    "name": "Saint Martin",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Dutch",
        "native": "Nederlands"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Malagasy",
        "native": "Malagasy"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Marshallese",
        "native": "Kajin Majel / Ebon"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "MK",
    "name": "North Macedonia",
    "languages": [
      {
        "name": "Macedonian",
        "native": "Македонски"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "ML",
    "name": "Mali",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "MM",
    "name": "Myanmar [Burma]",
    "languages": [
      {
        "name": "Burmese",
        "native": "မြန်မာစာ"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "languages": [
      {
        "name": "Mongolian",
        "native": "Монгол"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "MO",
    "name": "Macao",
    "languages": [
      {
        "name": "Chinese",
        "native": "中文"
      },
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "MP",
    "name": "Northern Mariana Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Chamorro",
        "native": "Chamoru"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "MQ",
    "name": "Martinique",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "MT",
    "name": "Malta",
    "languages": [
      {
        "name": "Maltese",
        "native": "bil-Malti"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "MV",
    "name": "Maldives",
    "languages": [
      {
        "name": "Divehi",
        "native": "ދިވެހިބަސް"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "MW",
    "name": "Malawi",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Chichewa",
        "native": "Chi-Chewa"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "MX",
    "name": "Mexico",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "languages": [
      {
        "name": "Malay",
        "native": "Bahasa Melayu"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "languages": [
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "NA",
    "name": "Namibia",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Afrikaans",
        "native": "Afrikaans"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "NC",
    "name": "New Caledonia",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "NE",
    "name": "Niger",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "NF",
    "name": "Norfolk Island",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "languages": [
      {
        "name": "Dutch",
        "native": "Nederlands"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "NO",
    "name": "Norway",
    "languages": [
      {
        "name": "Norwegian",
        "native": "Norsk (bokmål / riksmål)"
      },
      {
        "name": null,
        "native": null
      },
      {
        "name": "Norwegian Nynorsk",
        "native": "Norsk (nynorsk)"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "NP",
    "name": "Nepal",
    "languages": [
      {
        "name": "Nepali",
        "native": "नेपाली"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "NR",
    "name": "Nauru",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Nauruan",
        "native": "Dorerin Naoero"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "NU",
    "name": "Niue",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Maori",
        "native": "Māori"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "OM",
    "name": "Oman",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "PA",
    "name": "Panama",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "PE",
    "name": "Peru",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "PF",
    "name": "French Polynesia",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "PH",
    "name": "Philippines",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "PK",
    "name": "Pakistan",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Urdu",
        "native": "اردو"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "PL",
    "name": "Poland",
    "languages": [
      {
        "name": "Polish",
        "native": "Polski"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "PM",
    "name": "Saint Pierre and Miquelon",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "PN",
    "name": "Pitcairn Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "PR",
    "name": "Puerto Rico",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "PS",
    "name": "Palestine",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "PT",
    "name": "Portugal",
    "languages": [
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "PW",
    "name": "Palau",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      },
      {
        "name": "Guarani",
        "native": "Avañe'ẽ"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "QA",
    "name": "Qatar",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "RE",
    "name": "Réunion",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "RO",
    "name": "Romania",
    "languages": [
      {
        "name": "Romanian",
        "native": "Română"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "RS",
    "name": "Serbia",
    "languages": [
      {
        "name": "Serbian",
        "native": "Српски"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "RU",
    "name": "Russia",
    "languages": [
      {
        "name": "Russian",
        "native": "Русский"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "languages": [
      {
        "name": "Rwandi",
        "native": "Kinyarwandi"
      },
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "SA",
    "name": "Saudi Arabia",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "SD",
    "name": "Sudan",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "SE",
    "name": "Sweden",
    "languages": [
      {
        "name": "Swedish",
        "native": "Svenska"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "SG",
    "name": "Singapore",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Malay",
        "native": "Bahasa Melayu"
      },
      {
        "name": "Tamil",
        "native": "தமிழ்"
      },
      {
        "name": "Chinese",
        "native": "中文"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "SH",
    "name": "Saint Helena",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "languages": [
      {
        "name": "Slovenian",
        "native": "Slovenščina"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "SJ",
    "name": "Svalbard and Jan Mayen",
    "languages": [
      {
        "name": "Norwegian",
        "native": "Norsk (bokmål / riksmål)"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "languages": [
      {
        "name": "Slovak",
        "native": "Slovenčina"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "SM",
    "name": "San Marino",
    "languages": [
      {
        "name": "Italian",
        "native": "Italiano"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "SN",
    "name": "Senegal",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "SO",
    "name": "Somalia",
    "languages": [
      {
        "name": "Somalia",
        "native": "Soomaaliga"
      },
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "SR",
    "name": "Suriname",
    "languages": [
      {
        "name": "Dutch",
        "native": "Nederlands"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "SS",
    "name": "South Sudan",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "ST",
    "name": "São Tomé and Príncipe",
    "languages": [
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "SX",
    "name": "Sint Maarten",
    "languages": [
      {
        "name": "Dutch",
        "native": "Nederlands"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "SY",
    "name": "Syria",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "SZ",
    "name": "Swaziland",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Swati",
        "native": "SiSwati"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "TC",
    "name": "Turks and Caicos Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "TD",
    "name": "Chad",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "TF",
    "name": "French Southern Territories",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AN",
      "name": "Antarctica"
    }
  },
  {
    "code": "TG",
    "name": "Togo",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "TH",
    "name": "Thailand",
    "languages": [
      {
        "name": "Thai",
        "native": "ไทย / Phasa Thai"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "languages": [
      {
        "name": "Tajik",
        "native": "Тоҷикӣ"
      },
      {
        "name": "Russian",
        "native": "Русский"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "TK",
    "name": "Tokelau",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "TL",
    "name": "East Timor",
    "languages": [
      {
        "name": "Portuguese",
        "native": "Português"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "languages": [
      {
        "name": "Turkmen",
        "native": "Туркмен / تركمن"
      },
      {
        "name": "Russian",
        "native": "Русский"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "TO",
    "name": "Tonga",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Tonga",
        "native": "Lea Faka-Tonga"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "TR",
    "name": "Turkey",
    "languages": [
      {
        "name": "Turkish",
        "native": "Türkçe"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "TW",
    "name": "Taiwan",
    "languages": [
      {
        "name": "Chinese",
        "native": "中文"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "TZ",
    "name": "Tanzania",
    "languages": [
      {
        "name": "Swahili",
        "native": "Kiswahili"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "languages": [
      {
        "name": "Ukrainian",
        "native": "Українська"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "UG",
    "name": "Uganda",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Swahili",
        "native": "Kiswahili"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "UM",
    "name": "U.S. Minor Outlying Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "US",
    "name": "United States",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "UY",
    "name": "Uruguay",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "UZ",
    "name": "Uzbekistan",
    "languages": [
      {
        "name": "Uzbek",
        "native": "Ўзбек"
      },
      {
        "name": "Russian",
        "native": "Русский"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "VA",
    "name": "Vatican City",
    "languages": [
      {
        "name": "Italian",
        "native": "Italiano"
      },
      {
        "name": "Latin",
        "native": "Latina"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "VC",
    "name": "Saint Vincent and the Grenadines",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "SA",
      "name": "South America"
    }
  },
  {
    "code": "VG",
    "name": "British Virgin Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "VI",
    "name": "U.S. Virgin Islands",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "VN",
    "name": "Vietnam",
    "languages": [
      {
        "name": "Vietnamese",
        "native": "Tiếng Việt"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "languages": [
      {
        "name": "Bislama",
        "native": "Bislama"
      },
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "WF",
    "name": "Wallis and Futuna",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "WS",
    "name": "Samoa",
    "languages": [
      {
        "name": "Samoan",
        "native": "Gagana Samoa"
      },
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "OC",
      "name": "Oceania"
    }
  },
  {
    "code": "XK",
    "name": "Kosovo",
    "languages": [
      {
        "name": "Albanian",
        "native": "Shqip"
      },
      {
        "name": "Serbian",
        "native": "Српски"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "YE",
    "name": "Yemen",
    "languages": [
      {
        "name": "Arabic",
        "native": "العربية"
      }
    ],
    "continent": {
      "code": "AS",
      "name": "Asia"
    }
  },
  {
    "code": "YT",
    "name": "Mayotte",
    "languages": [
      {
        "name": "French",
        "native": "Français"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "languages": [
      {
        "name": "Afrikaans",
        "native": "Afrikaans"
      },
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "South Ndebele",
        "native": "isiNdebele"
      },
      {
        "name": "Southern Sotho",
        "native": "Sesotho"
      },
      {
        "name": "Swati",
        "native": "SiSwati"
      },
      {
        "name": "Tswana",
        "native": "Setswana"
      },
      {
        "name": "Tsonga",
        "native": "Xitsonga"
      },
      {
        "name": "Venda",
        "native": "Tshivenḓa"
      },
      {
        "name": "Xhosa",
        "native": "isiXhosa"
      },
      {
        "name": "Zulu",
        "native": "isiZulu"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "languages": [
      {
        "name": "English",
        "native": "English"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "languages": [
      {
        "name": "English",
        "native": "English"
      },
      {
        "name": "Shona",
        "native": "chiShona"
      },
      {
        "name": "North Ndebele",
        "native": "Sindebele"
      }
    ],
    "continent": {
      "code": "AF",
      "name": "Africa"
    }
  }
];

const Countries = () => (
  <Container>
    <Row>
      <Col md="12" lg="12" xs="12">
        <CustomTitle
          size="26px"
          text={messages.countries}
        />
      </Col>
    </Row>
    <Row>
      <Col md="12" lg="12" xs="12">
        <CountryList countries={countries} />
      </Col>
    </Row>
  </Container>
);

export default Countries;
