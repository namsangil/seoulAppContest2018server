var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    pid: String,
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    host: { type: String, default: '' },
    content: { type: String, default: '' },
    content_detail: { type: String, default: '' },       
    date: { type: Number, default: 0  },
    startTime: { type: Number, default: 0 },
    endTime: { type: Number, default: 0 },
    place: { type: Object, default: [] },
    certificate: { type: String, default: '' },
    rimage: { type: String, default: 'peace1.jpg' },
    confirm: { type: Boolean, default: 0 },
    regdate: { type: Date, default: Date.now  },
    editdate: { type: Date, default: Date.now  },
    rpl_count: { type: Number, default: 0  },
    like_count: { type: Number, default: 0  },
    noLike_count: { type: Number, default: 0  },

    cheer_count: { type: Number, default: 0  },
    sad_count: { type: Number, default: 0  },
    anger_count: { type: Number, default: 0  }

});

module.exports = mongoose.model('event', eventSchema);
