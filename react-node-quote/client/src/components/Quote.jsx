import PropTypes from "prop-types";
const Quote = ({ quote, author }) => {
  return (
    <blockquote className="text-xl italic font-semibold text-gray-900 bg-white rounded p-10 shadow">
      <p className="text-xl mb-3">&quot;{quote}&quot;</p>
      <span className="text-base text-gray-600 ml-5">- {author}</span>
    </blockquote>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
