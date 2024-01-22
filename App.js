import React from "react"
import ReactDOM  from "react-dom/client"


const Header = () =>{
    return(
        <div className="head">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg" alt="logo"></img>
            </div>
            <div className="navigator">
                <div>Home</div>
                <div>Contact Us</div>
                <div>Help</div>
                <div>Cart</div>
            </div>
        </div>
    )
}



const Rescard =(props) =>{
    const {resData}= props
    const {cloudinaryImageId, name, cuisines, locality, avgRating, costForTwo} = resData?.info
    const {slaString} = resData.info.sla
    return(
        <div className="Res-card">
            <div className="image-container">
                <img className="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="image"></img>
                <div className="prop">
                <div>{name}</div>
                <div>
                    {cuisines.join(', ')}
                </div>
                <div>
                    {locality}
                </div>
                <div>
                    {avgRating} stars
                </div>
                <div>
                    {costForTwo}
                </div>
                <div>
                    {slaString }
                </div>
                </div>
                
            </div>
        </div>
    )
}


resList =  [
    {
      "info": {
        "id": "319255",
        "name": "Ak Special Hyderabadi Biryani House",
        "cloudinaryImageId": "fqa68ipjnqv1r9xlrfvz",
        "locality": "Kothapet",
        "areaName": "Old Guntur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani"
        ],
        "avgRating": 4.3,
        "parentId": "453106",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹349",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ak-special-hyderabadi-biryani-house-kothapet-old-guntur-guntur-319255",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "651540",
        "name": "AK Atif Khan Biryani House",
        "cloudinaryImageId": "be2bfa3b5dde1e71b41144e9b62878a9",
        "locality": "Abudaya Mahila College",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "South Indian"
        ],
        "avgRating": 4.3,
        "parentId": "392132",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 12,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "12 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ak-atif-khan-biryani-house-abudaya-mahila-college-lakshmipuram-guntur-651540",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "119282",
        "name": "Sri Mayura",
        "cloudinaryImageId": "ri7n6ljinxzuuoafobjf",
        "locality": "Kothapeta",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Biryani",
          "Seafood",
          "Indian",
          "Chinese"
        ],
        "avgRating": 4.1,
        "parentId": "14451",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "14 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sri-mayura-kothapeta-lakshmipuram-guntur-119282",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "114986",
        "name": "Sri Lakshmi Foods",
        "cloudinaryImageId": "onz11xl4xklt69p2k1dr",
        "locality": "Siddhartha Gardens",
        "areaName": "Srinivasa Nagar Colony",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "South Indian",
          "Andhra"
        ],
        "avgRating": 4,
        "parentId": "14471",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 22:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sri-lakshmi-foods-siddhartha-gardens-srinivasa-nagar-colony-guntur-114986",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "361335",
        "name": "RK Food Court",
        "cloudinaryImageId": "ofiopaisxxhuqrx8p9tp",
        "locality": "Chandramouli Nagar",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "Tandoor"
        ],
        "avgRating": 4.2,
        "parentId": "170085",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/rk-food-court-chandramouli-nagar-lakshmipuram-guntur-361335",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86943",
        "name": "Mourya Tasty Foods",
        "cloudinaryImageId": "jlk2at5lezdiavt2fs8g",
        "locality": "Naidupet",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Indian",
          "Biryani",
          "Andhra",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "14586",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 13,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "13 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mourya-tasty-foods-naidupet-lakshmipuram-guntur-86943",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "380923",
        "name": "Ratna Food Court",
        "cloudinaryImageId": "tojryee5rjrk4d24kury",
        "locality": "Brahmam Gari Street",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Indian",
          "Juices",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "167539",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 22:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ratna-food-court-brahmam-gari-street-lakshmipuram-guntur-380923",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86587",
        "name": "Sri Mayura Family Garden Restaurant",
        "cloudinaryImageId": "esef7mxtw84fyvvknvly",
        "locality": "Lakshmipuram",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "South Indian",
          "Chinese",
          "Seafood",
          "Biryani",
          "Indian",
          "Tandoor"
        ],
        "avgRating": 4,
        "parentId": "14576",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sri-mayura-family-garden-restaurant-lakshmipuram-ashok-nagar-guntur-86587",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "120161",
        "name": "Sri Ramachandra Mess",
        "cloudinaryImageId": "vymswviqh31khtwfph8f",
        "locality": "Arundelpet",
        "areaName": "Brodipet",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Andhra"
        ],
        "avgRating": 4.3,
        "parentId": "6934",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sri-ramachandra-mess-arundelpet-brodipet-guntur-120161",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "320756",
        "name": "Hotel Grand Nagarjuna",
        "cloudinaryImageId": "l4exvtscffuguvvwjxve",
        "locality": "Kothapet",
        "areaName": "Brodipet",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "South Indian"
        ],
        "avgRating": 4.2,
        "parentId": "99156",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹175 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-grand-nagarjuna-kothapet-brodipet-guntur-320756",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "114192",
        "name": "Chennai Thalappakatti Biryani",
        "cloudinaryImageId": "njpqwezq69rqpri2hd89",
        "locality": "Railpet",
        "areaName": "Brodipet",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Biryani",
          "Tandoor",
          "Desserts",
          "Kebabs"
        ],
        "avgRating": 4.1,
        "parentId": "14279",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 16:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chennai-thalappakatti-biryani-railpet-brodipet-guntur-114192",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "410988",
        "name": "Leelavathi Deluxe Mess",
        "cloudinaryImageId": "snlzu4qejuxi28ljjjzn",
        "locality": "Arundelpet",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹140 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 4,
        "parentId": "6494",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/leelavathi-deluxe-mess-arundelpet-lakshmipuram-guntur-410988",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "666317",
        "name": "Hotel Subani - Gardens",
        "cloudinaryImageId": "f46cc9172c791dc5dfc7f7857a59daf7",
        "locality": "Brundavan Gardens",
        "areaName": "Hotel Subani Gardens",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Biryani",
          "Tandoor"
        ],
        "avgRating": 4,
        "parentId": "471713",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹500",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-subani-gardens-brundavan-gardens-hotel-subani-gardens-guntur-666317",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86556",
        "name": "Amaravathi Food Court",
        "cloudinaryImageId": "scqmj3e1tdrfq7xxd3ku",
        "locality": "Chandramouli Nagar",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "Biryani",
          "Combo",
          "Beverages",
          "Lebanese",
          "Indian",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "14568",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/amaravathi-food-court-chandramouli-nagar-lakshmipuram-guntur-86556",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86059",
        "name": "V Royal Park",
        "cloudinaryImageId": "jugcspco53mumqfzrdmm",
        "locality": "Arundalpet",
        "areaName": "Brodipet",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese",
          "Indian",
          "South Indian",
          "North Indian",
          "Tandoor",
          "Beverages",
          "Desserts",
          "Kebabs",
          "Biryani"
        ],
        "avgRating": 4.2,
        "parentId": "14536",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/v-royal-park-arundalpet-brodipet-guntur-86059",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "93860",
        "name": "Sweet Magic",
        "cloudinaryImageId": "yqeqjf0rl6b5ibgzqvjc",
        "locality": "lksmpuram Road",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Biryani",
          "Sweets",
          "Chinese",
          "Desserts",
          "Indian",
          "Bakery"
        ],
        "avgRating": 4.1,
        "parentId": "3142",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sweet-magic-lksmpuram-road-lakshmipuram-guntur-93860",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "343512",
        "name": "Navya Grand",
        "cloudinaryImageId": "gwsv73b4gujodkgsswe6",
        "locality": "Vinayak Nagar",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "South Indian",
          "Tandoor",
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4.3,
        "parentId": "144917",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "14 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/navya-grand-vinayak-nagar-lakshmipuram-guntur-343512",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "84469",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Near Pantaloons",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.2,
        "parentId": "547",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "16 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-near-pantaloons-lakshmipuram-guntur-84469",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86952",
        "name": "Viceroy Biryani Point",
        "cloudinaryImageId": "g0xlzkudrmfdlfub6yg4",
        "locality": "Arundelpet",
        "areaName": "Brodipet",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Biryani",
          "Indian",
          "Chinese",
          "Seafood"
        ],
        "avgRating": 4.3,
        "parentId": "14588",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 16:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/viceroy-biryani-point-arundelpet-brodipet-guntur-86952",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "450272",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
        "locality": "Ashok Nagar",
        "areaName": "Lakshmipuram",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "14 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-22 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-ashok-nagar-lakshmipuram-guntur-450272",
        "type": "WEBLINK"
      }
    }
  ]




const Body = () =>{
    return(
        <div className="Res-container">
            <Rescard resData = {resList[0]}/>
            <Rescard resData = {resList[1]}/>
            <Rescard resData = {resList[2]}/>
            <Rescard resData = {resList[3]}/>
            <Rescard resData = {resList[4]}/>
            <Rescard resData = {resList[5]}/>
            <Rescard resData = {resList[6]}/>
            <Rescard resData = {resList[7]}/>
            <Rescard resData = {resList[8]}/>
            <Rescard resData = {resList[9]}/>
            <Rescard resData = {resList[10]}/>
            <Rescard resData = {resList[11]}/>
            <Rescard resData = {resList[12]}/>
            <Rescard resData = {resList[13]}/>
            <Rescard resData = {resList[14]}/>
            <Rescard resData = {resList[15]}/>
            <Rescard resData = {resList[16]}/>
            <Rescard resData = {resList[17]}/>
            <Rescard resData = {resList[18]}/>
            <Rescard resData = {resList[19]}/>   
        </div>
    )
}




const Applayout = () =>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const add = ReactDOM.createRoot(document.querySelector('#root'))
add.render(<Applayout/>)