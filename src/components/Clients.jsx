import { clients } from "../constants"
import styles from "../style"
function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(client => {
          return <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] ${clients.length === 0 ? "mr-0" : "mr-2"}`}>
            <img alt="client" src={client.logo} className="sm:w-[192px] w-[100px] object-contain ss:mt-0 mt-4 imageHoverEffect" />
          </div>
        })}
      </div>
    </section>
  )
}

export default Clients
