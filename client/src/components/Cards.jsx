import CardButton from "./CardButton";

export default function Cards() {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src="https://pbs.twimg.com/profile_images/1461162285573894149/Nm2cpqIb_400x400.jpg"
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Politik
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Kategori ini mengarah ke Politik ya guys, jadi silahkan vote siapa
            menurut kalian Capres yang akan terpilih.
          </p>
          <CardButton />
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src="https://assets-a2.kompasiana.com/items/album/2023/05/15/9a24d48eafa6ba090c13cb91bcda5323-6462152e08a8b53812152342.jpg?t=o&v=500"
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Meme
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Kategori ini kalian bebas vote gambar apapun yg menurut kalian lucu
            guys!
          </p>
          <CardButton />
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src="https://www.gtav.hachiraito.com/wp-content/uploads/2021/06/rx7hp-cover-scaled.jpg"
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Otomotif
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Kategori Vote Poll yang ini sepertinya bakal jadi yang paling ramai
            karna banyak nya pecinta otomotif, khususnya mobil!
          </p>
          <CardButton />
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2023/10/22/cr7jpg-20231022123207.jpg"
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Olahraga
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Kategori ini mengarah ke Politik ya guys, jadi silahkan vote siapa
            menurut kalian Capres yang akan terpilih.
          </p>
          <CardButton />
        </div>
      </div>
    </>
  );
}
