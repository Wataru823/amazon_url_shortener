"use client"
import copy from "clipboard-copy"
import { useState } from "react"

const CopyButton = ({ copyText }: { copyText: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    copy(copyText).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    })
  }

  return (
    <button disabled={isCopied}
      onClick={handleCopy}
      className="text-sm py-1 px-3 hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none bg-gray-300 text-white rounded-2xl">
      {isCopied ? "Copied!" : "Copy"}
    </button>
  )
}
export default CopyButton
