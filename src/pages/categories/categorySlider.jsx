import { Input, List, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/api/api";

const CategorySlider = ({ setFilter, filter }) => {
  const { id } = useParams();
  const [categoryChild, setCategoryChild] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const getCategoryChildWithId = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/category/list?page=0&size=50&parentId=${id}`,
      );
      if (response?.status === 200) {
        if (response?.data?.data?.content?.length === 0) {
          return false;
        } else {
          setCategoryChild(response.data?.data);
        }
      }
    } catch (error) {
      error?.message;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategoryChildWithId();
  }, [id]);

  return (
    <div className="h-auto">
      {isLoading ? (
        <Spin style={{ color: "#FFBE1E" }} />
      ) : (
        <div className="flex flex-col items-start justify-center">
          <div className="w-full p-3">
            <h1 className="text my-1 text-base font-light">
              categoriyani tanlang
            </h1>
            <List
              header="bo'limlar"
              extra
              bordered
              loading={isLoading}
              className="px-1"
              grid={5}
            >
              <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="qidiring ..."
                className="ml-5   w-[80%]"
              />
              {categoryChild?.content
                ?.filter((item) => item?.name?.toLowerCase().includes(search))
                .map((item, index) =>
                  index <= 5 ? (
                    <List.Item>
                      <Link
                        to={`/category/${item?.id}`}
                        className={`mt-3 flex items-start justify-start  transition-none duration-150 `}
                        key={index}
                      >
                        {item?.name}
                      </Link>
                    </List.Item>
                  ) : (
                    ""
                  ),
                )}
            </List>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySlider;
