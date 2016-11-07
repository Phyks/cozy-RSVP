import cozySDK from 'cozysdk-client'
import moment from 'moment-timezone'

const docType = 'rsvp'

// Define model fields
const RSVPDefaultFields = {
  start: null,
  end: null,
  members: [],
  eventTypeHash: null,
  status: null
}

// Define view
cozySDK.defineView(
  docType,
  'all',
  doc => emit(doc._id, doc),  // eslint-disable-line no-undef
  error => error && console.error(error)
)

cozySDK.defineView(
  docType,
  'byday',
  (doc) => {
    const date = new Date(doc.start)
    emit(date.toISOString().split('T')[0], doc)  // eslint-disable-line no-undef
  },
  error => error && console.error(error)
)

// Constructor
class RSVP {
  constructor (attributes = {}) {
    Object.assign(this, RSVPDefaultFields, attributes)

    this.start = moment(this.start)
    this.end = moment(this.end)
  }

  static getFromView (view = 'all') {
    return cozySDK.queryView(docType, view, {})
  }

  static getById (id) {
      return cozySDK.find(docType, id)
  }

  static update (id, attributes) {
    return cozySDK.updateAttributes(docType, id, attributes)
  }
}

export default RSVP
