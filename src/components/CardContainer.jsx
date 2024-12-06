import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardContainer = ({base}) => {
  const posts = useSelector((state) => state.student.students);
  console.log(base);

  const status = useSelector((state) => state.student.status);
  const error = useSelector((state) => state.student.error);
  console.log(status);

  return (
    <section id="product" className="py-10 lg:py-20">
      <div className="align-center">
        <h2 className="text-2xl font-semibold text-green-400">
          Beauty Products
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {status === "loading" && (
            <div className="text-center text-3xl font-semibold capitalize">
              Loading...
            </div>
          )}
          {/* {status === "failed" && (
            <div className="capitalize text-3xl text-center font-semibold">
              {console.log();
              }
            </div>
          )} */}
          {(posts?.length) ? (
            <div className="carousel carousel-center max-w-7xl space-x-4 rounded-xl px-2 py-6">
              {posts.map((v, i) => (
                <div className="carousel-item" key={i}>
                  <Card {...v} card={v} />
                </div>
              ))}
            </div>
          ) : (
            <div className="carousel carousel-center max-w-7xl space-x-4 rounded-xl px-2 py-6">
              <div className="carusel-item">
                <div className="flex w-96 flex-col gap-4">
                  <div className="skeleton h-48 w-full"></div>

                  <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                      {" "}
                      <div className="skeleton h-4 w-28"></div>
                      <div className="skeleton h-4 w-48"></div>
                    </div>
                  </div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              </div>
              <div className="carusel-item">
                <div className="flex w-96 flex-col gap-4">
                  <div className="skeleton h-48 w-full"></div>

                  <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                      {" "}
                      <div className="skeleton h-4 w-28"></div>
                      <div className="skeleton h-4 w-48"></div>
                    </div>
                  </div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              </div>
              <div className="carusel-item">
                <div className="flex w-96 flex-col gap-4">
                  <div className="skeleton h-48 w-full"></div>

                  <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                      {" "}
                      <div className="skeleton h-4 w-28"></div>
                      <div className="skeleton h-4 w-48"></div>
                    </div>
                  </div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              </div>
              <div className="carusel-item">
                <div className="flex w-96 flex-col gap-4">
                  <div className="skeleton h-48 w-full"></div>

                  <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                      {" "}
                      <div className="skeleton h-4 w-28"></div>
                      <div className="skeleton h-4 w-48"></div>
                    </div>
                  </div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              </div>
            </div>
          )}

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
