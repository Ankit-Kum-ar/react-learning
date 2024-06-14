import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
    - Logo
    - Navigation
        - Home
        - About
        - Contact
* Body
    - Search
    - Restaurent Container
        - Restaurent Cards
* Footer
    - CopyRight
    - Link
    - Address
    - Contact
 */

// Create Header Component
const Header = () => {
    return (
        <div className="Header">
            <img className="Logo" src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg" />
            <div className="nav-items">
                <ul>
                    <li id="Leftli">Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Data from backend but now it is demo.
const cardList = [
  {
    "info": {
      "id": "807783",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_807783.JPG",
      "locality": "Omaxe Mall",
      "areaName": "Chandni Chowk",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 3.9,
      "parentId": "166",
      "avgRatingString": "3.9",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-12 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
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
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
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
        "header": "ITEMS",
        "subHeader": "AT ₹139"
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
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-omaxe-mall-chandni-chowk-delhi-807783",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "8628",
      "name": "Burger Singh (Big Punjabi Burgers)",
      "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
      "locality": "Bhavbhuti Marg",
      "areaName": "Connaught Place",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Snacks",
        "Fast Food",
        "Indian",
        "American",
        "Beverages",
        "Desserts",
        "Mughlai",
        "North Indian",
        "Biryani"
      ],
      "avgRating": 4.2,
      "parentId": "375065",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-13 01:00:00",
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
        "header": "50% OFF",
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
      "link": "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-bhavbhuti-marg-connaught-place-delhi-8628",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "21301",
      "name": "Barista Coffee",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/d76f43a9-37c1-4451-b9b8-b0879feadedd_21301.jpg",
      "locality": " Regal Cinema Building",
      "areaName": "Connaught Place",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Beverages",
        "Snacks",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "416281",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-12 22:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
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
      "link": "https://www.swiggy.com/restaurants/barista-coffee-regal-cinema-building-connaught-place-delhi-21301",
      "type": "WEBLINK"
    }
  }
]
    


// Create Restaurent Card Component
const RestaurentCard = (props) => {
    console.log(props);
    const {name,cloudinaryImageId,locality,avgRating} = props.resData.info;
    return (
        <div className="restaurent-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + {cloudinaryImageId}}/>
            <div className="restaurent-details">
                <h3>{name}</h3>
                <p>{locality}</p>
                <p>{avgRating}</p>
                <button>Order Now</button>
            </div>
        </div>
    )
}

// Create Body Component
const Body = () => {
    return (
        <div className="Body">
            <div className="search">
                <input type="text"></input>
                <button className="search-button">Search</button>
            </div>
            <div className="restaurent-container">
                {/* Sending properties or arguements with calling RestaurentCard functional component */}
                {/* <RestaurentCard url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" resName="Pizza Hut" location="Ashok Vihar" rating="⭐4.6"/>
                <RestaurentCard url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" resName="Chinease Work" location="Shaddhra" rating="⭐4.2"/>
                <RestaurentCard url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" resName="Burger King" location="Kashmere Gate" rating="⭐4.1"/> */}
                {/* <RestaurentCard resData = {cardList[0]}/>
                <RestaurentCard resData = {cardList[1]}/>
                <RestaurentCard resData = {cardList[2]}/>
                <RestaurentCard resData = {cardList[2]}/> */}
                {/* <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/> */}

                {/* Apply map to the cardlist Array */}
                {cardList.map((res)=>{
                    return <RestaurentCard key = {res.info.id} resData = {res}/>
                })}
            </div>
        </div>
    )
}

// Creating AppLayout in which all three components have come.
const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        {/* <Footer/> */}
        </>
    )
}

// Rendering the react element to the root element.
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout/>);