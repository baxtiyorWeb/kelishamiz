import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../components/breadcrumbs/BreadCrambs";
import ProductAbout from "../components/details/ProductAbout";
import ProductImage from "../components/details/ProductImage";
import Container from "../shared/Container";

export default function Details() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://ecb611a2cbdacfd0.mokky.dev/tests/${id}`,
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
    getData();
    setIsLoading(false);
  }, []);
  return (
    <Container>
      <BreadCrumbs />
      <div className={"flex justify-between"}>
        <h1>data</h1>
        <div className="mb-[150px] mt-[56px] h-auto w-[790px] flex-shrink-0 border bg-[#fff] p-[30px]">
          <div className="mb-10">
            <ProductImage data={data} isLoading={isLoading} />
          </div>
          <hr className="mb-6" />
          <ProductAbout data={data} isLoading={isLoading} />
        </div>
        <aside className="ml-[30px] mt-[6rem] flex h-[262px] w-[350px] flex-col  gap-y-4 rounded-[5px] bg-[#F5F5F5]">
          <div className="flex flex-col items-center py-4">
            <span className="relative mb-3 flex h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full">
              <img
                alt={""}
                className="aspect-square h-full w-full object-contain"
                src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              />
            </span>
            <h4 className="text-textDefault text-lg font-semibold capitalize">
              user name
            </h4>
            <span className="block text-[14px] text-[#A3A3A3]">online</span>
            <p className="block text-[14px] text-[#A3A3A3]">
              1 soat oldin online edi
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-3 rounded-sm">
            <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full border border-[#FEAD5E] bg-[#FEAD5E] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full border border-[#FEAD5E] bg-[#FEAD5E] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-x-3 rounded bg-[#1D828E] p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="text-[14px] font-medium text-white">
              Raqamni ko’rish
            </span>
          </div>
        </aside>
      </div>
    </Container>
  );
}
