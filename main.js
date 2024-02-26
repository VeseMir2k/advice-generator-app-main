const fetchQuote = async () => {
  try {
    const result = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    const data = await result.json();
    showQuote(data.slip.id, data.slip.advice);
  } catch (error) {
    console.error("Error:", error);
  }
};

const showQuote = (id, advice) => {
  const adviceNumberElement = document.querySelector(".advice-number__number");
  const adviceQuoteElement = document.querySelector(".advice__quote");
  adviceNumberElement.textContent = `#${id}`;
  adviceQuoteElement.textContent = `${advice}`;
};

const handleAdviceButton = () => {
  fetchQuote();
};

const init = () => {
  fetchQuote();
  const adviceButton = document.querySelector(".advice-button");

  adviceButton.addEventListener("click", handleAdviceButton);
};

init();
