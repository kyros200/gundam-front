import React from "react"
import "./Loader.scss"
import ReactLoading from "react-loading";

const Loader = ({ introText, mainText, show }) => {
  const handleAriaHidden = (text) => {
    const textSplit = text.split("|")

    const textP1 = textSplit[0]
    const hiddenText = textSplit[1]

    return (
      <>
        {textP1} <span aria-hidden={true}>{hiddenText}</span>
      </>
    )
  }

  return (
    <section
      aria-hidden={!show}
      className={`section-loader ${show ? "show" : "hide"}`}
    >
      {introText && (
        <h1 className="text">
          {introText}
        </h1>
      )}
      {mainText && (
        <h2 className="text bold">
          {handleAriaHidden(mainText)}
        </h2>
      )}
      <ReactLoading type={"spin"} color="#2B6535" />
    </section>
  )
}

export default Loader
