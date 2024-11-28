import { SearchBarBloc, SearchBarSubmit, SearchBarWrapper } from "./style";

const SearchBar: React.FC = () => {
  return (
    <SearchBarWrapper>
    <SearchBarBloc>
        <label htmlFor="location">Destination</label>
        <input type="text" name="location" id="location" placeholder='Rechercher une destination' />
    </SearchBarBloc>
    <SearchBarBloc>
        <span>Date</span>
        <span>Quand ?</span>
    </SearchBarBloc>
    <SearchBarBloc>
        <span>Voyageurs</span>
        <span>Combien ?</span>
    </SearchBarBloc>
    <SearchBarSubmit type="button" value="Rechercher" />
    </SearchBarWrapper>
  );
};
  
export default SearchBar;