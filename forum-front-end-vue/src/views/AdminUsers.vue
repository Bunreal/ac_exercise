<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-if="!(user.id === currentUser.profile.id)"
              @click.stop.prevent='toggleUserRole(user.id)'
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'

const dummyData = {
  "users": [
      {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$QJsMzOMuaTfmav.PQmVF6.jqAA.vp5juQw3ivXKlzG5DfBAikwJLW",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z"
      },
      {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$UFa3U.XCvphRqbN4kvSuuOjxQclcrZGcVOhfEsW/cAXw.NIlc5d/K",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z"
      },
      {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$wWs0yBxnj/.K/adzNCPqheRjlgRsrlLNVNag3JSzj9al8NOB3e666",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z"
      }
  ]
}

const dummyUser = {
  "profile": {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$QJsMzOMuaTfmav.PQmVF6.jqAA.vp5juQw3ivXKlzG5DfBAikwJLW",
      "isAdmin": true,
      "image": null,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-29T05:08:35.000Z",
      "Comments": [
          {
              "id": 2,
              "text": "Velit ratione laborum dicta omnis voluptas molestiae minus.",
              "UserId": 1,
              "RestaurantId": 2,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 4,
              "text": "Nesciunt suscipit quidem cumque velit dolor et magni in esse.",
              "UserId": 1,
              "RestaurantId": 4,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 5,
              "text": "A dolores ipsam ea nihil ut ut eligendi veniam enim.",
              "UserId": 1,
              "RestaurantId": 5,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 2
              }
          },
          {
              "id": 9,
              "text": "Rerum in consequatur quam.",
              "UserId": 1,
              "RestaurantId": 9,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 3
              }
          },
          {
              "id": 12,
              "text": "Non voluptatum commodi hic omnis eligendi debitis ea.",
              "UserId": 1,
              "RestaurantId": 12,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 3
              }
          },
          {
              "id": 13,
              "text": "Omnis ratione quia eos ex.",
              "UserId": 1,
              "RestaurantId": 13,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 16,
              "text": "Vero est aperiam recusandae iste cum occaecati quod.",
              "UserId": 1,
              "RestaurantId": 16,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 17,
              "text": "Voluptatem suscipit delectus omnis voluptatem.",
              "UserId": 1,
              "RestaurantId": 17,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 2
              }
          },
          {
              "id": 18,
              "text": "Ab veniam quisquam deserunt.",
              "UserId": 1,
              "RestaurantId": 18,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 5
              }
          },
          {
              "id": 19,
              "text": "Natus in voluptas.",
              "UserId": 1,
              "RestaurantId": 19,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 21,
              "text": "Et ea odio voluptas omnis ipsam.",
              "UserId": 1,
              "RestaurantId": 21,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 23,
              "text": "Esse accusantium qui molestiae molestiae dolore in.",
              "UserId": 1,
              "RestaurantId": 23,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 3
              }
          },
          {
              "id": 27,
              "text": "Sequi sunt sed corrupti.",
              "UserId": 1,
              "RestaurantId": 27,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 32,
              "text": "Est inventore ut consequatur consectetur dolorem dolores perspiciatis.",
              "UserId": 1,
              "RestaurantId": 32,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 34,
              "text": "Rem impedit occaecati vel et.",
              "UserId": 1,
              "RestaurantId": 34,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 39,
              "text": "Itaque exercitationem dignissimos molestiae neque.",
              "UserId": 1,
              "RestaurantId": 39,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 2
              }
          },
          {
              "id": 41,
              "text": "Voluptatibus facere provident voluptatibus.",
              "UserId": 1,
              "RestaurantId": 41,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 5
              }
          },
          {
              "id": 44,
              "text": "Omnis ratione alias hic qui.",
              "UserId": 1,
              "RestaurantId": 44,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 46,
              "text": "Voluptatem animi sunt officia ullam nihil recusandae aliquid molestias.",
              "UserId": 1,
              "RestaurantId": 46,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 3
              }
          },
          {
              "id": 50,
              "text": "Aliquid omnis at facilis.",
              "UserId": 1,
              "RestaurantId": 50,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 5
              }
          },
          {
              "id": 51,
              "text": "Molestiae quaerat nihil sapiente optio qui possimus placeat.",
              "UserId": 1,
              "RestaurantId": 1,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 5
              }
          },
          {
              "id": 53,
              "text": "Nihil sed quidem officia voluptatem enim.",
              "UserId": 1,
              "RestaurantId": 3,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 3
              }
          },
          {
              "id": 59,
              "text": "Cum aut qui et dicta.",
              "UserId": 1,
              "RestaurantId": 9,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 3
              }
          },
          {
              "id": 63,
              "text": "Qui vel odio itaque eveniet ut quidem est tempora temporibus.",
              "UserId": 1,
              "RestaurantId": 13,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 66,
              "text": "Porro nisi aliquam fugit vel.",
              "UserId": 1,
              "RestaurantId": 16,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 67,
              "text": "Iste voluptatem illum.",
              "UserId": 1,
              "RestaurantId": 17,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 2
              }
          },
          {
              "id": 81,
              "text": "Quo et qui hic commodi.",
              "UserId": 1,
              "RestaurantId": 31,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 84,
              "text": "Hic quidem rerum nostrum.",
              "UserId": 1,
              "RestaurantId": 34,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 87,
              "text": "Dolorum dolorem et voluptatibus corrupti libero nobis.",
              "UserId": 1,
              "RestaurantId": 37,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 90,
              "text": "Aspernatur cupiditate ut aut similique voluptas eligendi ut nostrum.",
              "UserId": 1,
              "RestaurantId": 40,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 3
              }
          },
          {
              "id": 91,
              "text": "Eius libero corporis ad eligendi est non.",
              "UserId": 1,
              "RestaurantId": 41,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 5
              }
          },
          {
              "id": 95,
              "text": "Omnis dicta reiciendis numquam dolorem expedita enim aut ab odio.",
              "UserId": 1,
              "RestaurantId": 45,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 108,
              "text": "Et libero quasi cumque numquam.",
              "UserId": 1,
              "RestaurantId": 8,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 116,
              "text": "Molestiae voluptate consectetur assumenda atque suscipit eaque illum.",
              "UserId": 1,
              "RestaurantId": 16,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 121,
              "text": "Perferendis enim est aut recusandae qui odio occaecati qui.",
              "UserId": 1,
              "RestaurantId": 21,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 124,
              "text": "Ut veniam ducimus modi aut distinctio.",
              "UserId": 1,
              "RestaurantId": 24,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 3
              }
          },
          {
              "id": 128,
              "text": "Omnis omnis commodi maiores libero labore sunt et veritatis.",
              "UserId": 1,
              "RestaurantId": 28,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 130,
              "text": "Ab molestias iure iure porro animi aut.",
              "UserId": 1,
              "RestaurantId": 30,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 2
              }
          },
          {
              "id": 133,
              "text": "Ut rerum distinctio et.",
              "UserId": 1,
              "RestaurantId": 33,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 4
              }
          },
          {
              "id": 135,
              "text": "Et minus officiis quis at et velit placeat aut.",
              "UserId": 1,
              "RestaurantId": 35,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 5
              }
          },
          {
              "id": 136,
              "text": "Assumenda rem sed magni veniam autem architecto.",
              "UserId": 1,
              "RestaurantId": 36,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 2
              }
          },
          {
              "id": 138,
              "text": "Non possimus ea.",
              "UserId": 1,
              "RestaurantId": 38,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 2
              }
          },
          {
              "id": 141,
              "text": "Consequuntur quo sunt magni in sint iusto.",
              "UserId": 1,
              "RestaurantId": 41,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 5
              }
          },
          {
              "id": 144,
              "text": "Qui consectetur ullam.",
              "UserId": 1,
              "RestaurantId": 44,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 1
              }
          },
          {
              "id": 150,
              "text": "Incidunt qui ullam aperiam rerum nihil nisi doloribus dolorum sed.",
              "UserId": 1,
              "RestaurantId": 50,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "Restaurant": {
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
                  "CategoryId": 5
              }
          }
      ],
      "FavoritedRestaurants": [],
      "Followers": [],
      "Followings": []
  },
  "isFollowed": false
}

export default {
  components: {
    AdminNav
  },
  data() {
    return {
      userData : {},
      currentUser : dummyUser
    }
  },
  created(){
    this.fetchUser()
  },
  methods: {
    fetchUser(){
      this.userData = dummyData.users
    },
    toggleUserRole(userId){
      this.userData = this.userData.map(user => {
        if(user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}

</script>