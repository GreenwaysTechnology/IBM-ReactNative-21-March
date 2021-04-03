const footwear = {
	"ProductCollection": [
		{
			"ProductId": "HT-1000",
			"Category": "Laptops",
			"Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
			"Name": "Footwear",
			"ProductPicUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpWxWPPqCOhStBLQM0CvCWvJ7l-30F4E3NruybDSaT6QD0AZr",
			"Status": "Available",
			"Quantity": 10,
			"Price": 956,
		},
		{
			"ProductId": "HT-1001",
			"Category": "Laptops",
			"Description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
			"Name": "Footwear Basic 17",
			"ProductPicUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00eKXtKUT2zDX5qsWNYpvK1jGDAfOLdlraqf3UgDNzoehRKjT",
			"Status": "Available",
			"Quantity": 20,
			"Price": 1249,
		},
		{
			"ProductId": "HT-1002",
			"Category": "Laptops",
			"Description": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
			"Name": "Footwear 18",
			"ProductPicUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXspCvx8ZbuZX6rhhF-qCTEGAjnW2hi0j2HzUunZky-aJDNpmw3g",
			"Status": "Available",
			"Quantity": 10,
			"Price": 1570,
		},
		{
			"ProductId": "HT-1003",
			"Category": "Laptops",
			"Description": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
			"Name": "Footwear 19",
			"ProductPicUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0tc50oVhmSb3llQLhJT-o-ZslQVdaqVdNsHZLanAdXrBavlW",
			"Status": "Available",
			"Quantity": 15,
			"Price": 1650,
		},
		{
			"ProductId": "HT-1007",
			"Category": "Accessories",
			"Description": "Digital Organizer with State-of-the-Art Storage Encryption",
			"Name": "Footwear Vault",
			"ProductPicUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiuCRsDfnavdkEau2uELxgltHHirVm0t7ULqqmfFgQDKFYmEVhw",
			"Status": "Available",
			"Quantity": 15,
			"Price": 299,
		},
		{
			"ProductId": "HT-1010",
			"Category": "Accessories",
			"Description": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
			"Name": "Footwear Professional 15",
			"ProductPicUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyifjcgsIocIOkf33kBtxTQPbbvrm6Au7QloLTVFTxlIQ7i5l9AQ",
			"Status": "Available",
			"Quantity": 16,
			"Price": 1999,
		},
		{
			"ProductId": "HT-1011",
			"Category": "Laptops",
			"Description": "Notebook Professional 17 with 2,80 GHz quad core, 17\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
			"Name": "Footwear Professional 17",
			"ProductPicUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYzYVwbJZIcWqg7Sn_HZfcEvGKov1gttGSJZA23ArrEONDN45",
			"Status": "Available",
			"Quantity": 17,
			"Price": 2299,
		},
		{
			"ProductId": "HT-1020",
			"Category": "Accessories",
			"Description": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
			"Name": "ITelO Footwear Net",
			"ProductPicUrl": "data:image/jpeg;base64,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",
			"Status": "Available",
			"Quantity": 14,
			"Price": 459,
		},
		{
			"ProductId": "HT-1021",
			"Category": "Accessories",
			"Description": "Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link",
			"Name": "ITelO Footwear SAT",
			"ProductPicUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kMtf5n5n1tjKpZPh2-JGQNUKOhbNYUF3qMFoRrIxIXwYnfLung",
			"Status": "Available",
			"Quantity": 50,
			"Price": 149,
		},
		{
			"ProductId": "HT-1022",
			"Category": "Accessories",
			"Description": "32 GB Digital Assistant with high-resolution color screen",
			"Name": "Comfort Easy",
			"DateOfSale": "2017-03-02",
			"ProductPicUrl": "data:image/jpeg;base64,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",
			"Status": "Available",
			"Quantity": 30,
			"Price": 1679,
		},
		{
			"ProductId": "HT-1023",
			"Category": "Accessories",
			"Description": "64 GB Digital Assistant with high-resolution color screen and synthesized voice output",
			"Name": "Comfort Senior",
			"ProductPicUrl": "data:image/jpeg;base64,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",
			"Status": "Available",
			"Quantity": 24,
			"Price": 512,
		},
		{
			"ProductId": "HT-1030",
			"Category": "Flat Screen Monitors",
			"Description": "Optimum Hi-Resolution max. 1920 x 1080 @ 85Hz, Dot Pitch: 0.27mm",
			"Name": "Footwear E-I",
			"ProductPicUrl": "data:image/jpeg;base64,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",
			"Status": "Available",
			"Quantity": 14,
			"Price": 230,
		}
	]
}

export default footwear;