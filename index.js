const toggleClose = () => {
    let close = document.getElementById("starting-look");
    if (close.style.display === "none") {
      close.style.display = "block";
    } else {
      close.style.display = "none";
    }
  };
  
  
  const plusHandler = () => {
    toggleClose();
    toggleDetails();
  };
  
  
  const toggleDetails = () => {
    let moreDetails = document.getElementById("more-details");
    if (moreDetails.style.display === "block") {
      moreDetails.style.display = "none";
    } else {
      moreDetails.style.display = "block";
    }
  };