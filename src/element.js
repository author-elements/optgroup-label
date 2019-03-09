class AuthorOptgroupLabelElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)
  }
}

customElements.define('author-optgroup-label', AuthorOptgroupLabelElement)

export default AuthorOptgroupLabelElement
