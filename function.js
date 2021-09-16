/* ***********************************************************************


                  PROTOTYPE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


**************************************************************************/

/*************************************************************************
 * Countries
 *
 *
 * API
 * https://restcountries.eu/#api-endpoints-all
 *
 *************************************************************************/

window.function = async function (country) {
  if (country.value === undefined) return undefined;

  let sCountry = country.value;

  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${sCountry}?fullText=false`
  );

  const data = await response.json();

  var obj = data[0];
  var res = [];

  res.push(obj["name"]); // Rang 0
  res.push(obj["alpha2Code"]); // Rang 1
  res.push(obj["capital"]); // Rang 2
  res.push(obj["flag"]); // Rang 3
  return res;
};
