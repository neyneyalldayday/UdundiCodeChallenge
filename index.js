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

  const newMessageHandler = () => {
    readMore();
    
  }
  
  
  const toggleDetails = () => {
    let moreDetails = document.getElementById("more-details");
    if (moreDetails.style.display === "block") {
      moreDetails.style.display = "none";
    } else {
      moreDetails.style.display = "block";
    }
  };

  const readMore = () => {
    let newMessage = document.getElementById("anotherMessage");
    if (newMessage.style.display === "block") {
      newMessage.style.display = "none";
    } else {
      newMessage.style.display = "block";
    }
  };