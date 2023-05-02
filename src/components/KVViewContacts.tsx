import kv from '@vercel/kv'

export const revalidate = 1

export const KVViewContacts = async () => {
  const keys = await kv.keys('contact-*')
  return (
    <small>
      <span id='count-views'>{keys.length}</span> contactos realizados
    </small>
  )
}
