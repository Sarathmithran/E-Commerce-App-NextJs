
import { CategoryDataType } from "@/app/services/classes";
import { ProductServices } from "@/app/services/product-services";
import React, { useEffect, useState } from "react";

export default function ProductFilter(props: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<any>([]);

  function handleCategoryChange(category: string): void {
    setSelectedCategory(category);
  }
  useEffect(() => {
    props.setCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const getCategory = async () => {
      const categories = await ProductServices.getCategory();
      setCategories(categories);
    };
    getCategory();
  }, []);

  return (
    <div className="pt-4 mt-2 ms-3">
      <form className="d-flex flex-column">
        <span className="fs-5 fw-bold  ps-3">Category:</span>
        <label
          key={"all"}
          className="btn btn-link text-start text-decoration-none pb-0"
        >
          <input
            type="radio"
            value={"all"}
            checked={selectedCategory === ""}
            onChange={() => handleCategoryChange('')}
            className="btn-check"
            name={"All"}
            id={"all"}
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor={"All"}>
            {" "}
            {"All"}
          </label>
        </label>
        {categories.map((c:any) => (
          <label
            key={c.slug}
            className="btn text-start text-decoration-none border-white"
            style={{ width: '85%' }}
          >
            <input
              type="radio"
              value={c.slug}
              checked={selectedCategory === c.slug}
              onChange={() => handleCategoryChange(c.slug)}
              className="btn-check "
              name={c.name}
              id={c.slug}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor={c.slug} style={{ width: '100%' }}>
              {c.name}
            </label>
          </label>
        ))}
      </form>
    </div>
  );
}
