import React, { useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import Story from "../story";
import StoryDialog from "../storyDialog";
import { useDispatch } from "react-redux";
import { getCampaignOfCategory } from "../../store/campaign/campaignSlice";
const CategoryCarousel = () => {
  const [open, setOpen] = useState("false");
  const dispatch = useDispatch();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="test">
      <StoryDialog open={open} setOpen={setOpen} />
      <Slider {...settings}>
        <div
          className="categories-small-div"
          onClick={() => {
            setOpen("open");
            dispatch(
              getCampaignOfCategory("635e94eb-75ac-4933-a75c-07a21db3a319")
            );
          }}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://www.normann-copenhagen.com/-/media/Product-Pictures-Podio/Normann-Copenhagen/Scala/Scala-Table-H75-cm/Scala-Table-H75-150-cm-Marble/604184/Scala-Table-H75-150-cm1.png?w=279&rev=d4aeb33d2e7b48d085b8a6b9b0eb6d2c"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "500",
              color: "#000",
            }}
          >
            Tables
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580742487-resize.jpg?crop=1xw:1xh;center,top&resize=480:*"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Chair
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px !important",
              margin: "0px 5px 0px 0px",
            }}
            src="https://www.ikea.com/us/en/images/products/malm-bed-frame-high-black-brown-luroey__0638608_pe699032_s5.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Bed
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://platincdn.com/516/pictures/thumb/460X-270X-LYHFQQRSEF910202103830_adel-berjer.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Berjer
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://res.cloudinary.com/castlery/image/private/b_rgb:FFFFFF,c_fit,f_auto,q_auto,w_1000/v1624969246/crusader/variants/50440636-PL4001/Hanford-Armchair-Light-Grey-Front.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Armchair
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://enza.akinoncdn.com/cms/2022/05/06/e58513ba-43ac-47db-b169-bc75bc6a94f5.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Lighting
          </Typography>
        </div>
      </Slider>
    </div>
  );
};
export default CategoryCarousel;
const settings = {
  dots: true,
  className: "center",
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 5, // lenght -1 e kadar bozulma yok
  swipeToSlide: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
