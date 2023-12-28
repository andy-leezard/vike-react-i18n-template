import React from "react"
import { useData } from "$/renderer/useData"
import type { Data } from "./+data"
import { navigate } from "vike/client/router"
import { Link } from "$/components/Link"

export default function Page() {
  const { movies } = useData<Data>()
  return (
    <>
      <h1>Star Wars Movies</h1>
      <ol>
        {movies.map(({ id, title, release_date }) => (
          <li key={id}>
            <Link href={`/star-wars/${id}`}>{title}</Link> ({release_date})
          </li>
        ))}
      </ol>
      <p>
        <button
          onClick={() => {
            const randomIndex = Math.floor(Math.random() * 6) + 1
            navigate(`/star-wars/${randomIndex}`)
          }}
        >
          Random
        </button>
      </p>
      <p>
        Source:{" "}
        <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.
      </p>
      <p>
        Data can be fetched by using the <code>data()</code> hook.
      </p>
    </>
  )
}
