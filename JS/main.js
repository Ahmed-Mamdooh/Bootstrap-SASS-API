function getUsersDataAndShowIt() {
  fetch("https://dummyjson.com/users")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const peopleData = result.users;
      for (let i = 0; peopleData.length; i++) {
        const personData = peopleData[i];
        let dataPlace = document.getElementById("example").cloneNode(true);
        dataPlace.id = "";
        let img_url_place = dataPlace.children[0].children[1].children[0];
        let img_url = personData.image;
        img_url_place.src = img_url;
        let name_place = dataPlace.children[0].children[2];
        let name = `${personData.firstName} ${personData.maidenName} ${personData.lastName}`;
        name_place.textContent = name;
        let mail_place =
          dataPlace.children[0].children[3].children[0].children[1];
        let mail = personData.email;
        mail_place.href += mail;
        mail_place.textContent = mail;
        let phone_place =
          dataPlace.children[0].children[3].children[1].children[1];
        let phone = personData.phone;
        phone_place.href += phone;
        phone_place.textContent = phone;
        let work_place = dataPlace.children[0].children[3].children[2];
        let work = personData.company.title;
        work_place.innerHTML += work;
        let university_place = dataPlace.children[0].children[3].children[3];
        let university = personData.university;
        if (university.length > 48) {
          let array = Array.from(university);
          array.splice(39);
          array.push("...");
          university = array.join("");
        }
        university_place.innerHTML += university;
        let location_place = dataPlace.children[0].children[3].children[4];
        let location = personData.address.city;
        location_place.innerHTML += location;
        document.querySelector(".team .row").append(dataPlace);
      }
    })
    .finally(() => {
      document.getElementById("example").remove();
    });
}
getUsersDataAndShowIt();
