The goal of this app is to quickly get you off the ground with **Making API call with Fetch**

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/travel-guide-output.gif" alt="travel-guide-desktop-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Completion Instructions

<details>
<summary>Functionality added</summary>
<br/>
The app consist the following functionalities

When the app is opened initially,

- An HTTP GET request will made to **travelGuidePackagesApiUrl**
- **<i>loader</i>** will be displayed while fetching the data
- If the HTTP GET request made is successful, the list of packages will be displayed

</details>

<details>
<summary>API Requests & Responses</summary>
<br/>

**travelGuidePackagesApiUrl**

**API**: `https://apis.ccbp.in/tg/packages`

**Method**: `GET`

**Description**:

Returns a response containing the list of packages

**Response**

```json

{
    "packages":[
        {
        "id":1,
        "name":"Best of Paris in 7 days tour",
        "image_url":"https://assets.ccbp.in/frontend/react-js/travel-guide/paris-img.png",
        "description":"Paris, France capital, is a major European city and a global centre for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine."
        },
        ...
   ],
}

```

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #eef4f7; width: 150px; padding: 10px; color: black">Hex: #eef4f7</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #52bbf0; width: 150px; padding: 10px; color: black">Hex: #52bbf0</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<br/>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
