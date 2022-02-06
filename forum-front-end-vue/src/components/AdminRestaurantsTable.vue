// ./src/components/AdminRestaurantsTable.vue
<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  "restaurants": [
    {
      "id": 1,
      "name": "Green Cummings",
      "tel": "238.270.9282",
      "address": "81165 Hills Inlet",
      "opening_hours": "08:00",
      "description": "Quia aspernatur rerum facere quia.\nVelit voluptas est rerum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.63769327720376",
      "viewCounts": 1,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-30T14:04:37.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 2,
      "name": "Rosendo Balistreri",
      "tel": "771.720.3178 x4472",
      "address": "816 Casper Inlet",
      "opening_hours": "08:00",
      "description": "Ex nulla et modi aut quasi id.\nVelit corporis veritatis veritatis tenetur explicabo sunt non vitae.\nOfficia explicabo animi debitis dolorum est nihil laudantium velit omnis.\nDeleniti tenetur veniam harum rem non quia est.\nAt aliquam quos rerum minus.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.163852183431867",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 3,
      "name": "Camron Cole",
      "tel": "798.759.4106 x11071",
      "address": "638 Baby Throughway",
      "opening_hours": "08:00",
      "description": "libero",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.88891168264365",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 4,
      "name": "Maxime Weimann",
      "tel": "883.580.4438 x72728",
      "address": "240 Sandra Shores",
      "opening_hours": "08:00",
      "description": "Et consequatur et minima nemo. Neque dolores harum quia nostrum est iste. Dolores voluptatem omnis molestiae et voluptatum assumenda. Voluptas optio similique dignissimos culpa dicta totam explicabo ut est.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.565553536549025",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 5,
      "name": "Morton Wilderman",
      "tel": "(984) 147-2134 x42077",
      "address": "2565 Cummings Walk",
      "opening_hours": "08:00",
      "description": "Tempora cum dolor odit saepe error optio aut iusto animi.\nEos iusto magni repellat quae et ratione ullam cumque voluptatem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.98144126553946",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 6,
      "name": "Marianne Schulist",
      "tel": "026-986-5391",
      "address": "08453 Turner Canyon",
      "opening_hours": "08:00",
      "description": "fuga",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.97730355781204",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 7,
      "name": "Mr. Hassan Hartmann",
      "tel": "1-894-403-9077 x9768",
      "address": "876 Noel Divide",
      "opening_hours": "08:00",
      "description": "voluptatem veritatis animi",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.30756087355141",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 8,
      "name": "Kamille Smitham",
      "tel": "(844) 849-8813",
      "address": "1455 Schiller Spring",
      "opening_hours": "08:00",
      "description": "Ullam aliquam dolorum autem. Eum non aut et perferendis sint. Ut aliquam excepturi tenetur illo. Blanditiis architecto et sed.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.04754467371002",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 9,
      "name": "Declan Braun",
      "tel": "(697) 551-5996 x41739",
      "address": "510 Wolf Road",
      "opening_hours": "08:00",
      "description": "Odit ut impedit labore voluptas.\nEnim autem fuga sequi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.032170605782003",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 10,
      "name": "Dr. Celestino Kerluke",
      "tel": "1-932-236-3110 x7083",
      "address": "9499 Strosin Throughway",
      "opening_hours": "08:00",
      "description": "Velit eos accusantium qui cupiditate. Neque id id in quis aut. Assumenda aliquid dolor est. Et esse adipisci voluptatem earum. Ut fuga est sequi iste omnis cumque. Minima non ut error rerum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.5027817351904513",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 11,
      "name": "Guido Lang II",
      "tel": "390.000.2845 x1004",
      "address": "53259 Delia Keys",
      "opening_hours": "08:00",
      "description": "Enim pariatur error.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.497520923879367",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 12,
      "name": "Demarco Schuppe",
      "tel": "120-982-3250 x90635",
      "address": "4902 Danielle Mountains",
      "opening_hours": "08:00",
      "description": "consequatur pariatur commodi",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.67312558565417",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 13,
      "name": "Yasmine Streich",
      "tel": "317.560.8480",
      "address": "499 Genevieve Green",
      "opening_hours": "08:00",
      "description": "harum officiis unde",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.663591492752325",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 14,
      "name": "Leila Mills",
      "tel": "(737) 882-1244 x4471",
      "address": "03338 Sanford Ridge",
      "opening_hours": "08:00",
      "description": "Dolorem iure corporis. Ducimus et beatae harum dicta et. Dolor odio sit deleniti. Ad beatae culpa ut dolores. Corporis exercitationem quo hic voluptas a. Autem soluta rerum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.542088115286653",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 15,
      "name": "Manley Prosacco",
      "tel": "1-148-958-2167 x604",
      "address": "32727 Mills Stream",
      "opening_hours": "08:00",
      "description": "Et dolor ipsam sit id minus. Harum molestias exercitationem. In quisquam atque aperiam culpa possimus tempore.\n \rDucimus quo labore eveniet labore sequi tempora a qui. Nobis voluptas iusto culpa in soluta quos dolores quibusdam. Cupiditate fugiat eius. Quasi id doloremque tempora minus ipsam sapiente ad. Qui esse officia consequatur dolorem ut et enim cumque dignissimos. Voluptatum ipsam voluptatem qui architecto.\n \rSunt minus temporibus expedita placeat soluta quia minima. Et corrupti nesciunt quae reiciendis officia. Animi facilis officiis modi nostrum harum. Officia voluptatem quia ea. Aliquid id qui ut sit molestiae corporis ex perferendis. Asperiores est quasi modi asperiores voluptatibus amet quos ab.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.9330454922482865",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 16,
      "name": "Charlotte Koss",
      "tel": "(323) 135-7524",
      "address": "1422 Corkery Flat",
      "opening_hours": "08:00",
      "description": "Ut dolore tenetur sed eaque omnis earum sequi incidunt reiciendis. Praesentium quos voluptate quia porro voluptatem consequatur eos at ad. Modi quia et id non corporis. Quos et error architecto commodi delectus qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.845591938650438",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 17,
      "name": "Garry Koepp",
      "tel": "066.328.8431 x9003",
      "address": "4548 Melyssa Pass",
      "opening_hours": "08:00",
      "description": "Suscipit hic commodi at qui nisi harum dolor. Maiores excepturi dolor. Omnis quam maiores qui cum eos qui qui totam. Id ducimus assumenda laboriosam. Voluptatibus ducimus sint doloribus error. Sit odio quam.\n \rSoluta qui a sint. Ad sed consectetur nulla nemo quos quia nihil earum voluptatum. Placeat et ut nulla et quisquam in officia qui et. Itaque omnis ipsam cupiditate vitae sed aspernatur et repellat. Voluptatibus fugit et accusantium nam.\n \rVoluptates sed labore repellat eius ea quaerat corporis placeat dicta. Et cumque dignissimos laudantium occaecati dolores recusandae est. Cum ex assumenda excepturi cupiditate quia fuga quidem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.622655361657985",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 18,
      "name": "Maryjane Roberts",
      "tel": "1-228-961-8408 x42639",
      "address": "0945 Kilback Forks",
      "opening_hours": "08:00",
      "description": "Libero repudiandae qui atque culpa in explicabo. Est culpa illum quia eos sit. Aliquid nobis deleniti omnis sed voluptas eum in.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.592809715116246",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 19,
      "name": "Kaley Runte",
      "tel": "1-817-289-7166 x3121",
      "address": "84069 Porter Radial",
      "opening_hours": "08:00",
      "description": "Error eos autem quod architecto nemo enim officia ea.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.219437524676884",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 20,
      "name": "Cordie Gislason",
      "tel": "(652) 900-2616 x644",
      "address": "394 Reinger Station",
      "opening_hours": "08:00",
      "description": "Reiciendis molestiae iusto voluptas possimus alias suscipit ipsum qui sequi. Amet aspernatur fuga eveniet molestias accusantium quaerat nostrum quo iste. Impedit aut amet eaque aut explicabo non aut culpa maxime. Eum est sed sed voluptas sint quo temporibus. Iste id neque rem optio.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.92906553755047",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 21,
      "name": "Adelle Strosin",
      "tel": "368-064-2545 x60824",
      "address": "38298 Blick Shoals",
      "opening_hours": "08:00",
      "description": "Quaerat ipsa quas voluptatem quisquam suscipit consectetur velit. Vitae enim culpa architecto sed maxime. Consequatur maxime natus sed molestiae asperiores temporibus sunt delectus. Cum et ratione recusandae exercitationem commodi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.51040939577286",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 22,
      "name": "Dr. Virgil Heller",
      "tel": "734-632-1632 x61044",
      "address": "407 Frida Lock",
      "opening_hours": "08:00",
      "description": "quod",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.50768392716388",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 23,
      "name": "Jovan Bogisich",
      "tel": "166-885-2034 x3788",
      "address": "50484 Delilah Locks",
      "opening_hours": "08:00",
      "description": "labore",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.37727189242798",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 24,
      "name": "Trenton Bayer",
      "tel": "(039) 656-7580 x94868",
      "address": "433 Shayna Locks",
      "opening_hours": "08:00",
      "description": "Occaecati explicabo qui omnis ut fugiat.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.40572394247286",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 25,
      "name": "Rosalyn Dare",
      "tel": "(147) 461-8402 x1089",
      "address": "48881 Jaquan Lake",
      "opening_hours": "08:00",
      "description": "Perspiciatis iure aut dolor nostrum commodi. Eum et ut dolorum quos mollitia sint nesciunt et. Eveniet quae facilis in. Aut qui quo voluptas perferendis blanditiis eveniet dolor odit. In dolorum ut possimus quos consequatur molestiae ut accusantium omnis. Soluta qui esse dolor voluptatibus praesentium dolorum enim.\n \rDolores adipisci itaque cumque nulla odio laborum fugit iusto qui. Totam ut rerum dolorem quas. Numquam aut ipsa earum eos aut excepturi voluptatem. Quibusdam deserunt vitae quam ut odio quia reiciendis ipsam nisi. Consequuntur impedit a autem consequuntur ut. Ut dolores libero quo quisquam temporibus non repudiandae quo rem.\n \rSapiente iusto suscipit pariatur assumenda. Ut autem neque. Rerum incidunt odio et voluptatem enim. Eveniet vero maiores maxime vel consectetur eligendi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.096634795028585",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 26,
      "name": "Eleazar Schaefer III",
      "tel": "(503) 214-3218 x74353",
      "address": "704 Uriel Meadows",
      "opening_hours": "08:00",
      "description": "Veritatis nemo autem odit aut magnam nobis similique. Aliquid sit quasi. Sed aspernatur saepe pariatur et fugit eum magni et hic. Quas eum nisi rerum officiis et est dolor aliquam. Accusantium possimus qui et odio sint necessitatibus doloremque et eius. Ut suscipit voluptatem molestiae est est omnis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.79067992872604",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 27,
      "name": "Marjory Towne",
      "tel": "141.463.4106",
      "address": "58503 Fritsch Grove",
      "opening_hours": "08:00",
      "description": "Explicabo veniam ut rerum minima. Dolorum fugit voluptatum consectetur consequatur dignissimos et est accusamus. Quibusdam et saepe.\n \rNon quas perferendis est earum perspiciatis omnis. Libero quia quibusdam laborum quia itaque sit reiciendis aut in. Qui ut hic molestiae aliquid adipisci dolores quaerat deleniti repellat.\n \rExpedita maiores dicta fugit itaque temporibus cumque veniam sint ut. Velit recusandae fugit distinctio molestiae. Omnis expedita sit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.810671376045526",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 28,
      "name": "Terrance Eichmann",
      "tel": "1-986-688-8281",
      "address": "382 Shaun Mission",
      "opening_hours": "08:00",
      "description": "qui sunt harum",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.21062714905257",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 29,
      "name": "Lois Rohan",
      "tel": "782.633.3687 x51809",
      "address": "5417 Jordi Manors",
      "opening_hours": "08:00",
      "description": "Tempore sit optio nostrum inventore.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.94152804473891",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 30,
      "name": "Alvis Rau",
      "tel": "877-104-0956 x1814",
      "address": "1364 Green Extensions",
      "opening_hours": "08:00",
      "description": "Aut totam maxime ipsum quia autem officia velit natus.\nAccusamus porro alias quo nemo.\nAssumenda officia ea.\nFacere culpa rerum dicta corporis ducimus a atque odit.\nEius aut et omnis et dolorem a libero.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.20434809570348",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 31,
      "name": "Miss Margaretta Cole",
      "tel": "(387) 324-8242 x044",
      "address": "776 Brekke Junctions",
      "opening_hours": "08:00",
      "description": "distinctio",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.829183928165584",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 32,
      "name": "Mauricio Fay",
      "tel": "922-337-7996 x1071",
      "address": "18911 Grady Motorway",
      "opening_hours": "08:00",
      "description": "Velit autem dignissimos eum quo occaecati. Assumenda in qui necessitatibus voluptas et. Soluta nobis aliquid explicabo et et distinctio labore. Inventore ex dicta dolorum alias adipisci excepturi nam nemo. Facere eligendi modi.\n \rVoluptas quo qui. Maiores dolores deleniti nisi voluptatem voluptas sunt. Quia optio officiis ut. Consectetur a rerum nostrum harum aut et. Suscipit modi et occaecati at sequi.\n \rDistinctio delectus fugit corrupti itaque autem. Fugiat est ipsam. Quibusdam sed et et quasi nemo neque quo sed.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.24350190913655",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 33,
      "name": "Desmond Schneider",
      "tel": "(962) 447-9217 x79453",
      "address": "8715 Bashirian Parkways",
      "opening_hours": "08:00",
      "description": "debitis velit quis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.364352947549726",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 34,
      "name": "Ebony Bruen IV",
      "tel": "822.152.2781 x84631",
      "address": "5486 Stacy Crossing",
      "opening_hours": "08:00",
      "description": "qui voluptatem placeat",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.5542514967243",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 35,
      "name": "Nettie Herman",
      "tel": "1-785-340-6685",
      "address": "38994 Wunsch Field",
      "opening_hours": "08:00",
      "description": "Quia est sed minima.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.92627152412922",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 36,
      "name": "Noble Boyle Jr.",
      "tel": "915.431.5459",
      "address": "7536 Torphy Station",
      "opening_hours": "08:00",
      "description": "Molestiae vero alias maiores nihil qui ipsam quia aut aperiam. Ut est aliquid eum consequatur. Dolor nulla debitis qui sunt quasi minus quis itaque. Molestiae eveniet dolores nesciunt. Eligendi vitae nam hic iste rerum facilis dolorem. Nihil quo et iusto recusandae.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.477932037382293",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 37,
      "name": "Aaliyah Swift",
      "tel": "(107) 372-7145 x4779",
      "address": "986 Eldora Drives",
      "opening_hours": "08:00",
      "description": "Dolore id quia magni et suscipit eos quo. Optio quis nihil eligendi ut voluptas. Consequatur repellendus repellendus nisi qui aliquid. Ratione eos beatae.\n \rRerum minus repellendus. Iusto molestiae sunt inventore. Nihil voluptatem libero est ab quis dolores consequatur aut quia.\n \rCommodi qui ea quia et rerum. Qui modi quos. Ducimus dolore accusantium nostrum a. Adipisci odio dolor sit velit quia sit voluptas ut. Esse impedit enim minima non.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.38659483136426",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 38,
      "name": "Garret Mayert MD",
      "tel": "(980) 432-6154",
      "address": "498 Kuhic Street",
      "opening_hours": "08:00",
      "description": "Magni rerum beatae sunt illum mollitia id non libero. Fugit nemo et et. Nihil numquam asperiores voluptatem similique. Dolore ut est voluptas qui quia nesciunt consequatur tempore praesentium.\n \rProvident nihil voluptas id. Ut velit sed ab natus sit est maiores vel. Quasi quas vitae. Neque et culpa eum sit occaecati qui animi laboriosam perferendis. Ut pariatur praesentium.\n \rDistinctio voluptatem officia quis corporis fugit cumque non odit. Quae quis ut voluptas. Voluptatibus quam minus. Id est dicta ad voluptatem ad ipsum aut dolor qui. Saepe laboriosam animi quo iure. Neque totam alias quod nostrum sapiente iste fugiat dolorum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.7944013764170208",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 39,
      "name": "Leatha Kilback",
      "tel": "(291) 471-7943 x4754",
      "address": "477 Rachel Knoll",
      "opening_hours": "08:00",
      "description": "Eveniet tempora quia pariatur necessitatibus et corrupti corrupti explicabo voluptatem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.60118676717651",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 40,
      "name": "Leslie Schroeder",
      "tel": "1-698-347-7540 x518",
      "address": "688 Thelma Estates",
      "opening_hours": "08:00",
      "description": "Molestiae sint quia eaque dolorem consectetur ex. Est unde et qui omnis error sequi autem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.68049917854842",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 41,
      "name": "Kody Johnson",
      "tel": "485.189.4884 x461",
      "address": "83814 Weber Wall",
      "opening_hours": "08:00",
      "description": "Labore perspiciatis aut et voluptatem voluptas quia laudantium officiis quia. Et non repellendus numquam quo iure et eos. Est voluptate est hic voluptas qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.09348952877513",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 42,
      "name": "Camila Rippin",
      "tel": "1-736-488-2723 x1836",
      "address": "22373 Leda Dale",
      "opening_hours": "08:00",
      "description": "Asperiores omnis voluptatem ex quasi iste cumque quas pariatur sint. Ducimus rerum aliquid eos non unde expedita ut et incidunt. Sequi ut animi et molestiae quisquam.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.43740523347469",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 43,
      "name": "Judson Lubowitz",
      "tel": "645-064-0937",
      "address": "099 Shaun Vista",
      "opening_hours": "08:00",
      "description": "Dicta consequatur ut rem aut. Distinctio voluptate sint earum iure corrupti quidem. Suscipit iure est et rerum temporibus. Voluptas autem sit ad. Culpa quia consectetur dignissimos quia optio ratione necessitatibus nemo praesentium. Laborum quo nisi occaecati et adipisci eaque rerum maiores.\n \rQuo in vero et nihil. Rerum vero consequatur ad praesentium officiis et. Aspernatur repudiandae dolores aliquam aut vel et sit beatae. Magni sed odit dolorum numquam velit voluptas nihil optio. Quos culpa qui et necessitatibus omnis dolore architecto. Esse accusantium rerum non provident perspiciatis.\n \rId dolorum suscipit vel dolor qui. Commodi dolor dolores hic ab. Inventore eius nulla molestias sed molestiae.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.21797108431491",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 44,
      "name": "Annamae Labadie",
      "tel": "880-793-3672",
      "address": "4685 Santino Tunnel",
      "opening_hours": "08:00",
      "description": "ut",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.29486083109702",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 45,
      "name": "Ms. Frances Dicki",
      "tel": "937.597.9284 x883",
      "address": "60020 Simonis Spur",
      "opening_hours": "08:00",
      "description": "Rerum voluptate necessitatibus. Aut sint dolorum minus. Ratione neque similique eveniet.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.331494586515728",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 46,
      "name": "Rowan Muller",
      "tel": "816.840.2062 x984",
      "address": "02610 Elwyn Parkways",
      "opening_hours": "08:00",
      "description": "Vel labore aliquid quam ut dolorem aut sed. Ea repellendus quibusdam ut. Eius magni eveniet.\n \rDoloremque quaerat occaecati fuga voluptas molestiae. Omnis explicabo deleniti esse vitae similique. Voluptatum qui et. Laboriosam aut dignissimos non adipisci eos praesentium qui.\n \rDolorem porro dignissimos possimus libero dolore natus asperiores. Veniam provident nihil sint velit aspernatur qui cupiditate earum sit. Voluptatem ab eaque sunt pariatur et. Quis eaque soluta modi qui earum culpa. Ut nulla voluptates sint ratione voluptatem quia rerum aut ut. Nesciunt quasi modi nobis molestias odio debitis sunt aut quia.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.60195099796955",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 47,
      "name": "Kasey Sauer",
      "tel": "532.266.9509",
      "address": "40305 Douglas Road",
      "opening_hours": "08:00",
      "description": "Velit voluptas accusamus excepturi nihil molestias nesciunt asperiores optio.\nExplicabo sapiente odit quae eos omnis repellendus.\nHic non quia molestiae commodi nobis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.73273176830781",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 48,
      "name": "Evert Windler III",
      "tel": "007.532.2396",
      "address": "3961 Delia Underpass",
      "opening_hours": "08:00",
      "description": "Reprehenderit vero non alias quam est odit. Officiis rem nihil eos voluptas qui qui. Rerum consequatur molestiae accusamus cumque iure qui debitis modi. Possimus numquam iure architecto omnis et hic est earum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.70239674942131",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 49,
      "name": "Miss Marquis Koss",
      "tel": "1-269-008-0233 x35732",
      "address": "9495 Jena Court",
      "opening_hours": "08:00",
      "description": "Expedita fuga omnis enim.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.06832507478177",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    },
    {
      "id": 50,
      "name": "Treva Connelly",
      "tel": "819-766-7554 x39637",
      "address": "48561 Kaylee Landing",
      "opening_hours": "08:00",
      "description": "Voluptas soluta dolorem labore ipsum eum aut. Dolor non illum rerum in autem molestiae. Culpa nihil in nihil quod. Aut explicabo cupiditate nisi rerum sed odio suscipit at vitae.\n \rQui et omnis natus nemo dolorem a. Qui aperiam laboriosam corrupti libero atque praesentium autem consequuntur enim. Est sint itaque pariatur error.\n \rRepellat cupiditate pariatur aperiam. Repellat voluptas eum doloribus omnis. Nam debitis illo. Consequuntur deleniti consequatur doloremque perferendis quia excepturi non soluta. Vel nostrum facilis aut architecto eligendi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.01528268139973",
      "viewCounts": 0,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-01-29T05:08:35.000Z",
        "updatedAt": "2022-01-29T05:08:35.000Z"
      }
    }
  ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant (restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  }
}
</script>