import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loading from "./../ui/loading/Loading";

import { Carousel } from "antd";
import {
  getCategoriesRootLisId,
  getCategoriesRootListSticky,
} from "../exports/api";
const SubmenuComponent = ({ childCategories, chilId }) => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootLisId(chilId),
  });

  return (
    <>
      {data?.childCategories?.length &&
        childCategories?.childCategories?.map((item) => (
          <Menu mode="horizontal" key={index}>
            <Menu.Item title={item?.name}>
              <SubmenuComponent data={item} />
            </Menu.Item>
          </Menu>
        ))}
    </>
  );
};

export default function Categoriyes() {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootListSticky(),
  });
  console.log(data);
  if (isLoading) return <Loading />;

  return (
    <div className="slider-container-styck my-4 h-[140px]    w-full  p-1">
      <Carousel
        draggable
        className="flex select-none items-center justify-center"
        arrows
        dots={true}
        slidesToShow={4}
        slidesToScroll={1}
        infinite
        autoplay
      >
        {data?.data?.content?.map((item, index) => (
          <div
            key={index}
            className="mt-1 flex h-[130px_!important] w-[210px_!important] flex-col items-center justify-center  rounded-xl border border-bgColor bg-whiteTextColor"
          >
            <Link
              to={`/category/${item?.id}?category-name=${item?.name
                .split(", ")
                .join("-")}`}
              className="flex w-full  flex-col items-center justify-center rounded-sm   text-center text-sm "
            >
              <img
                src={`data:image/png;base64,${item?.file?.fileBase64}`}
                className="my-2 h-[80px] w-[80px] rounded-full object-cover"
                alt=""
              />
              <span className="mt-3 text-center  font-poppins  font-normal not-italic leading-[100%] ">
                {item?.name}
              </span>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
