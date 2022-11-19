const BASE_URL = "https://api.github.com/";
const BASE_PROFILE = "KononyukL";

const myName = document.querySelector(".js-name");
const loader = document.querySelector(".js-loader");
const myBiography = document.querySelector(".js-biography");
const listMyRepos = document.querySelector(".js-list-repos");
const myPhoto = document.querySelector(".js-img-photo");
const mygitHubprofile = document.querySelector(".js-github-profile");

const getMyRepos = async () => {
  const res = await fetch(`${BASE_URL}users/${BASE_PROFILE}/repos`);
  return await res.json();
};

const getMyProfile = async () => {
  const res = await fetch(`${BASE_URL}users/${BASE_PROFILE}`);
  return await res.json();
};

const getBranch = async (repo, branch) => {
  const res = await fetch(
    `${BASE_URL}repos/${BASE_PROFILE}/${repo}/branches/${branch}`
  );
  return await res.json();
};

const onElemClick = (elem, data) => {
  elem.addEventListener("click", async (event) => {
    try {
      if (event.target.tagName !== "P" && !event.target.children.length) {
        loader.classList.add("visible");
        const branch = await getBranch(data.name, data.default_branch);
        const p = document.createElement("p");
        p.classList.add("branch-info");
        elem.appendChild(p);

        p.innerHTML = `Default branch: ${
          data.default_branch
        } <br /> Date: ${new Date(
          branch.commit.commit.author.date
        ).toLocaleString()}`;
      } else {
        const p = elem.querySelector("p");
        elem.removeChild(p);
      }
    } catch (error) {
      console.error(error);
    } finally {
      loader.classList.remove("visible");
    }
  });
};

const getMyData = async () => {
  try {
    loader.classList.add("visible");

    const profile = await getMyProfile();
    const repos = await getMyRepos();

    myPhoto.setAttribute("src", profile.avatar_url);
    myName.innerHTML = profile.name;
    mygitHubprofile.innerHTML = profile.login;
    myBiography.innerHTML = profile.bio;

    repos.forEach((element) => {
      const li = document.createElement("li");
      li.classList.add("repos");
      li.innerHTML = element.name;
      listMyRepos.appendChild(li);
      onElemClick(li, element);
    });
  } catch (error) {
    console.error(error.message);
  } finally {
    loader.classList.remove("visible");
  }
};

getMyData();
