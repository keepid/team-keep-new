import PropTypes from 'prop-types'

export function EventEmbed({ src, title, className }) {
  return (
    <div
      className={`w-full max-w-6xl mx-auto h-screen md:h-[65vh] md:min-h-[40rem] md:max-h-[75vh] overflow-hidden rounded-2xl border-2 border-slate-300 bg-white ${className || ''}`}
    >
      <iframe
        src={src}
        title={title}
        className="h-full w-full border-0"
        allow="fullscreen; payment"
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  )
}

EventEmbed.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
}

EventEmbed.defaultProps = {
  title: 'Embedded event',
  className: '',
}
