const Aside = {
  render: async () => {
    return `
   <div class="aside-header">
    <div>BOUTIQUE PAR CATEGORIE</div>
    <button class="aside-close-button" id="aside-close-button">x</button>
  </div>
  <div class="aside-body">
    <ul class="categories">
      <li>
        <a href="/#/?q=voiture"
          >Voitures
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li>
      <li>
        <a href="/#/?q=jeep"
          >Jeeps
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li>
      <li>
        <a href="/#/?q=bus"
          >Bus
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li> 
      <li>
        <a href="/#/?q=camion"
          >Camions
          <span><i class="fa fa-chevron-right"></i></span>
        </a>
      </li> 
    </ul>
  </div>`;
  },
  after_render: async () => {
    document.getElementById("aside-container").classList.remove("open");
    document
      .getElementById("aside-close-button")
      .addEventListener("click", async () => {
        document.getElementById("aside-container").classList.remove("open");
      });
  },
};

export default Aside;
