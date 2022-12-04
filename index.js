async function getColleges() {
    let url = 'https://terrytcelik.github.io/assignment/college.json';
    try {
        let response = await fetch(url);
        if(response.status == '200') {
            return await response.json();
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

async function renderColleges() {
    let colleges = await getColleges();
    let colleges_html = '';
    if(colleges != null) {
        let college_degree_list = colleges.college_degrees;
        college_degree_list.forEach(college_degree => {
            let college_html = `<div class="college">
                                    <h3>${college_degree.college.school}</h3>
                                    <p class="college_text">Program/Major = ${college_degree.college.program_major}</p>
                                    <p class="college_text">Degree type = ${college_degree.college.type}</p>
                                    <p class="college_text">Conferred year = ${college_degree.college.year_conferred}</p>
                                </div>`;
            colleges_html += college_html;
        });
    } else {
        colleges_html = `<div class="college">
                            <h3 id="error_message">An error occured while obtaining the college information!</h3>
                        </div>`;
    }
    let container = document.getElementById("college_container");
    container.innerHTML = colleges_html;
}

const eduButton = document.getElementById("edu_button");

eduButton.addEventListener("click", function() {
    renderColleges();
},true);
