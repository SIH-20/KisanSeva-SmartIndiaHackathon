package com.uttarakhand.kisanseva2.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.uttarakhand.kisanseva2.R

class NegotiatedActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_negotiated)
        supportActionBar!!.title = getString(R.string.negotiated_prices)
    }
}