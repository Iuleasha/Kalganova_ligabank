import PropTypes from "prop-types";

export const FilmType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  noteDescription: PropTypes.arrayOf(PropTypes.string),
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
});

export const FilmsType = PropTypes.arrayOf(FilmType);

export const LogoLight = PropTypes.bool;

export const InputDataType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
});

export const SelectType = PropTypes.shape({
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
});

export const InputNumberType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
});
