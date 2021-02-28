  
  function getDate(date) {
    return date.toISOString().split("T")[0].split("-").map(v => Number(v));
  }

  window.onload = function() {
    const Tday = new Date();
    
    const nowMonth = Tday.getMonth();
    
    const [y, m] = getDate(new Date(Tday.setMonth(nowMonth)));
    
    const lastDay = getDate(new Date(y, m))[2];
    
    const day = new Date([y, m, 1].join("-")).getDay();
    
    const maxDay = day + lastDay;

    let html = '';

    for (let count = 1; count <= maxDay; count++) {

      const bool = count > day && maxDay >= count;

      html += `
        <div class="dateSel ${bool ? 'background' : ''}">${bool ? count - day : ''}</div>
      `;
    }

    document.querySelector('.dateSel').innerHTML = html;
  }
