import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPageState } from "../../slices/PageSlice";
import { useSpeechRecognition } from 'react-speech-kit';
import { Mic } from 'react-feather'; // Import the Mic icon from react-feather

const ProductPage = () => {
  const { category: initialCategory } = useParams();
  const [category, setCategory] = useState(initialCategory);
  const dispatch = useDispatch();
  dispatch(setPageState("/Products/all"));

  const [searchInput, setSearchInput] = useState("");
  const [voiceSearchInput, setVoiceSearchInput] = useState("");
  const [filteredByName, setFilteredByName] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setVoiceSearchInput(result);
      handleSearch(result);  // Call your search handler with the voice search input
    }
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/products/filter?category=${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  const handleSort = (property, order) => {
    setSearchInput("");
    const sortedProducts = [...products];

    if (order === "LH") {
      sortedProducts.sort((a, b) => a[property] - b[property]);
    } else {
      sortedProducts.sort((a, b) => b[property] - a[property]);
    }

    setProducts(sortedProducts);
    setSelectedSortOption(`${property}${order}`);
  };

  const handleViewAll = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/products/`);
      setSearchInput("");
      setProducts(response.data);
      setSelectedSortOption("");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = (input) => {
    const value = input.trim().toLowerCase();
    setSearchInput(value);

    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(value)
    );

    setFilteredByName(filteredProducts);
  };

  const filteredProductsToDisplay = searchInput || voiceSearchInput
    ? filteredByName
    : products;

  return (
    <>
      <Navbar />
      <div className="product-page">
        <div className="pp-main">
          <form className="search-btn-div-pp">
            <input
              type="text"
              name="search"
              placeholder="Search...."
              value={searchInput}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Mic
              size={24}  // Size of the icon
              className="microphone-icon align-left"
              onClick={listening ? stop : listen}
            />
          </form>

          <div className="p-sorting">
            <div className="sort-options">
              <select
                id="sortOptions"
                value={selectedSortOption}
                onChange={(e) =>
                  handleSort(
                    e.target.value.substring(0, e.target.value.length - 2),
                    e.target.value.slice(-2)
                  )
                }
                className="custom-select"
              >
                <option value="">Price</option>
                <option value="priceLH">Low to High</option>
                <option value="priceHL">High to Low</option>
              </select>
            </div>

            <div className="view-all">
              <p onClick={handleViewAll}>View all</p>
            </div>
          </div>

          <div className="products-display-div">
            {filteredProductsToDisplay.map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                imgUrl={`../${product.images[0]}`}
                name={product.productName}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
