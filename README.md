## Base URL

[https://api-trec-sxk5htqkea-et.a.run.app/](https://api-trec-sxk5htqkea-et.a.run.app/search)

## Destinasi

**Endpoint** : **/destinasi**

**Method**:  GET

**Description** : Get 30 destinasi random from database

**Example request :**

GET [https://api-trec-sxk5htqkea-et.a.run.app/](https://api-trec-sxk5htqkea-et.a.run.app/search)destinasi

**Example response to one of the many destinations :** 

```
{
        "id": 1,
        "Place_id": 128,
        "Place_Name": "Gumuk Pasir Parangkusumo",
        "City": "Yogyakarta",
        "urlImage": ""
    },
```

## Detail Destinasi

**Endpoint : /detailDestinasi/:id** 

**Method:** GET

**Description** : Get detail destinasi from place id

**Example request:**

GET [https://api-trec-sxk5htqkea-et.a.run.app/](https://api-trec-sxk5htqkea-et.a.run.app/search)detailDestinasi/14

example response

```
{
    "ID": 14,
    "urlImage": "",
    "namaTempat": "Pulau Pelangi",
    "Lokasi": "Jakarta",
    "HTM": 900000,
    "Deskripsi": "Pulau Pelangi adalah sebuah pulau yang terletak di Kepulauan Seribu di Daerah Khusus Ibukota Jakarta, Indonesia. Pulau Pelangi adalah sebuah pulau yang terletak di Kepulauan Seribu di Daerah Khusus Ibukota Jakarta, Indonesia, Pulau Pelangi / biasa disebut Pulau Petondan Besar ( Pelangi Island ) merupakan pulau resort yang sesuai untuk berlibur. Pulau Resort ini mempunyai konsep natural, karena sebagian wilayahnya di penuhi dengan rerimbunan pohon yang menyejukan mata, Keindahan alam dan lautnya layak untuk dikunjungi. Dikelilingi oleh rimbunan pohon dan laut berwarana biru jernih membuat suasanan sejuk dan nyaman. Kondisi yang ideal untuk wisata bersama keluarga. Dengan akomodasi yang langsung menghadap ke laut membuat turis betah berlama-lama di Pulau Pelangi.\\nMenurut informasi, Pulau Pelangi atau Pulau Petondan Besar merupakan pulau yang berada pada gugusan Kepulauan Seribu. Secara administratif termasuk dalam wilayah Kabupaten Administratif Kepulauan Seribu provinsi DKI Jakarta. Bersamaan dengan Pulau Petondan Kecil merupakan sebuah resort berlibur. Letaknya berdekatan dengan gugusan yang sama dengan Pulau Kelor dan Pulau Kelapa.\\nUntuk mencapai Pelangi Resort dibutuhkan waktu 90 menit perjalanan dari dermaga Pantai Mutiara. Terdapat kapal speedboat khusus di pier R1 Pantai Mutiara yang membawa penumpang kesana. Letaknya 60 â€“ 70 km dari Pantai Mutiara memang lumayan jauh. Namun perjalanan anda terbayar lunas begitu sampai di Pulau Pelangi.\n",
    "google_maps_link": "https://www.google.com/maps?q=-5.587055,106.5885"
}
```

## Search Destinasi

**Endpoint : /search**

**Method: POST**

**Description:** Search data yang diinginkan dari database

**Example request:**

POST https://api-trec-sxk5htqkea-et.a.run.app/search?input=bandung

**Example response:**

```json
{
        "id": 1,
        "Place_Name": "GunungTangkuban perahu",
        "City": "Bandung",
        "urlImage": ""
    },
    {
        "id": 4,
        "Place_Name": "Jalan Braga",
        "City": "Bandung",
        "urlImage": ""
    },
    {
        "id": 3,
        "Place_Name": "Gedung Sate",
        "City": "Bandung",
        "urlImage": ""
    },
    {
        "id": 2,
        "Place_Name": "Trans Studio Bandung",
        "City": "Bandung",
        "urlImage": ""
    },
```

# Filter Destinasi

**********************************Endpoint: /filter**********************************

**Method:** POST

**Description:** Filter data berdasarkan kategori dan kota

**Example request and response filter category**

**Endpoint**: /filter?cat=budaya

```json
{
        "id": 1,
        "urlImage": "",
        "Place_id": 82,
        "Place_Name": "Museum Satria Mandala",
        "City": "Jakarta",
        "Category": "Budaya"
    },
    {
        "id": 1,
        "urlImage": "",
        "Place_id": 86,
        "Place_Name": "Keraton Yogyakarta",
        "City": "Yogyakarta",
        "Category": "Budaya"
    },
```

**Example filter kota**

**Endpoint :** /filter?kota=Semarang

```
{
        "id": 1,
        "urlImage": "",
        "Place_id": 335,
        "Place_Name": "Candi Gedong Songo",
        "City": "Semarang",
        "Category": "Budaya"
    },
    {
        "id": 1,
        "urlImage": "",
        "Place_id": 336,
        "Place_Name": "Grand Maerakaca",
        "City": "Semarang",
        "Category": "Taman Hiburan"
    },
```

**Example filter data keduanya**

**Endpoint:** /filter?cat=budaya&kota=Semarang

```json
{
        "id": 1,
        "urlImage": "",
        "Place_id": 335,
        "Place_Name": "Candi Gedong Songo",
        "City": "Semarang",
        "Category": "Budaya"
    },
    {
        "id": 1,
        "urlImage": "",
        "Place_id": 338,
        "Place_Name": "Lawang Sewu",
        "City": "Semarang",
        "Category": "Budaya"
    },
```
