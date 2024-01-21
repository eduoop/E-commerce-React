import { GoHomeFill } from "react-icons/go";
import {
  FilterBy,
  FilterContainer,
  Filters,
  AllFiltersContainer,
  IconContainer,
  MainContainer,
  Navbar,
  SearchContainer,
  Line,
  PriceInput,
  PricesContainer,
  SetFiltersButton,
} from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FormEvent, useContext, useState } from "react";
import { DateFilter } from "../../components/DateFilter";
import { ListProductsMain } from "../../components/ListProductsMain";
import { ProductContext } from "../../contexts/Products/ProductContext";
import { Product } from "../../models/Product";
import { CartContext } from "../../contexts/Cart/CartContext";
import FilterIntegerValueWithDiscount from "../../utils/FilterIntegerValueWithDiscount";

export const Home = () => {
  // const [search, setSearch] = useState("");
  interface Filter {
    search?: string;
    minPrice?: number | null | undefined;
    maxPrice?: number | null | undefined;
    dateInclusion?: string | number | Date | null | undefined;
  }
  const [filter, setFilter] = useState<{
    search: string;
    minPrice: number | null | undefined;
    maxPrice: number | null | undefined;
    dateInclusion: string | number | Date | null | undefined;
  }>({
    search: "",
    minPrice: null,
    maxPrice: null,
    dateInclusion: null,
  });
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const { products } = useContext(ProductContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate()

  function extractNumbers(str: string | null | undefined): number | null {
    if (str == null || str === "") {
      return null;
    }

    const numerosExtraidos = str.replace(/[^0-9]/g, "");
    const numeroConvertido = parseInt(numerosExtraidos, 10);

    return isNaN(numeroConvertido) ? null : numeroConvertido;
  }

  const cleanFilters = () => {
    setFilter({
      search: "",
      minPrice: null,
      maxPrice: null,
      dateInclusion: null,
    });
    setFilteredProducts(undefined);
  };

  const handleValorChangeMinPrice = (value: string | undefined) => {
    if (value) {
      setFilter((prevFilters) => ({
        ...prevFilters!,
        minPrice: extractNumbers(value),
      }));
    } else {
      setFilter((prevFilters) => ({
        ...prevFilters!,
        minPrice: null,
      }));
    }
  };

  const handleValorChangeMaxPrice = (value: string | undefined) => {
    if (value) {
      setFilter((prevFilters) => ({
        ...prevFilters!,
        maxPrice: extractNumbers(value),
      }));
    } else {
      setFilter((prevFilters) => ({
        ...prevFilters!,
        maxPrice: null,
      }));
    }
  };

  const SetSearchAndFilter = (items: Product[], filter: Filter): Product[] => {
    return items.filter((item) => {
      // Filtrar por termo de pesquisa
      if (
        filter.search &&
        !item.name.toLowerCase().includes(filter.search.toLowerCase())
      ) {
        return false;
      }

      // Filtrar por preço mínimo
      if (
        filter.minPrice !== undefined &&
        filter.minPrice &&
        FilterIntegerValueWithDiscount(item.price, item.discount) <
          filter.minPrice
      ) {
        return false;
      }

      // Filtrar por preço máximo
      if (
        filter.maxPrice !== undefined &&
        filter.maxPrice &&
        FilterIntegerValueWithDiscount(item.price, item.discount) >
          filter.maxPrice
      ) {
        return false;
      }

      // Filtrar por data de inclusão
      if (filter.dateInclusion !== undefined && filter.dateInclusion !== null) {
        const itemDateParts = item.dateInclusion.split("-");
        const filterDate = new Date(filter.dateInclusion);

        if (
          itemDateParts.length === 3 &&
          parseInt(itemDateParts[2]) === filterDate.getFullYear() &&
          parseInt(itemDateParts[1]) === filterDate.getMonth() + 1 &&
          parseInt(itemDateParts[0]) === filterDate.getDate()
        ) {
          return true;
        } else {
          return false;
        }
      }

      return true;
    });
  };

  const search = (e: FormEvent | undefined | null) => {
    if (e) {
      e.preventDefault();
    }
    setFilteredProducts(SetSearchAndFilter(products, filter));
  };

  return (
    <MainContainer>
      {/* <Link Name="Home" to="/"/>
      <Link Name="Cart" to="/cart"/> */}
      <Navbar>
        <IconContainer onClick={() => setFilteredProducts(undefined)}>
          <NavLink to="/">
            <GoHomeFill fontSize={40} />
          </NavLink>
        </IconContainer>

        <SearchContainer onSubmit={(e) => search(e)}>
          <input
            value={filter?.search}
            onChange={(e) =>
              setFilter((prevFilters) => ({
                ...prevFilters!,
                search: e.target.value,
              }))
            }
            type="text"
            placeholder="Busque aqui"
          />
          <button>
            <FaSearch fontSize={20} />
          </button>
        </SearchContainer>

        <IconContainer>
          <NavLink to="/cart">
            <FaCartShopping fontSize={35} />
          </NavLink>

          <span onClick={() => navigate('/cart')}>{cart.length}</span>
        </IconContainer>
      </Navbar>

      <Filters>
        {/* <FilterBy fontSize="25px" fontWeight="700">
          Filtrar Por:
        </FilterBy> */}
        <AllFiltersContainer>
          <FilterContainer>
            <FilterBy fontSize="16px" fontWeight="600">
              Data de postagem:
            </FilterBy>
            <div style={{ width: "200px" }}>
              <DateFilter filter={filter} setFilter={setFilter} />
            </div>
          </FilterContainer>

          <Line />

          <FilterContainer>
            <FilterBy fontSize="16px" fontWeight="600">
              Preço:
            </FilterBy>
            <PricesContainer>
              <PriceInput
                value={filter.minPrice! && filter.minPrice}
                placeholder="De:"
                type="text"
                onValueChange={handleValorChangeMinPrice}
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
                decimalsLimit={2}
              />
              <PriceInput
                value={filter.maxPrice! && filter.maxPrice}
                placeholder="Até:"
                type="text"
                onValueChange={handleValorChangeMaxPrice}
                prefix="R$ "
                decimalSeparator=","
                groupSeparator="."
                decimalsLimit={2}
              />
            </PricesContainer>
          </FilterContainer>

          <Line />

          <SetFiltersButton
            onClick={search}
            bgColor="rgb(0, 96, 177)"
            textColor="white"
          >
            Buscar
          </SetFiltersButton>
          <SetFiltersButton
            onClick={cleanFilters}
            bgColor="white"
            textColor="rgb(0, 96, 177)"
          >
            Limpar
          </SetFiltersButton>
        </AllFiltersContainer>
      </Filters>

      <ListProductsMain
        products={filteredProducts ? filteredProducts : products}
      />
    </MainContainer>
  );
};
