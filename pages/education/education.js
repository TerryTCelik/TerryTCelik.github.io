async function getCertificates() {
    let url = 'https://terrytcelik.github.io/certificates.json';
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



async function renderCertificates() {
    let response = await getCertificates();
    let certificates_html = '';
    if(response != null) {
        let certificates = response.certificates;
        certificates.forEach(cert => {
            let certificate_html = `<tr class="cert_box">
                                        <td><img class="logo_cert" alt="certificate logo" src="${cert.certificate.icon_url}"></td>
                                        <td>
                                            <p class="cert_text">${cert.certificate.name}</p>
                                        </td>
                                        <td>
                                            <p class="cert_text">Date Issued: ${cert.certificate.date}</p>
                                        </td>
                                    </tr>`;
            certificates_html += certificate_html;
        });
    } else {
        certificates_html = `<div>
                            <h3 id="error_message">An error occured while obtaining the certificate information!</h3>
                        </div>`;
    }
    let table = document.getElementById("certificate_table");
    table.innerHTML = certificates_html;
}

renderCertificates();