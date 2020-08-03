package com.uttarakhand.kisanseva2.activities

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.View
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity
import com.uttarakhand.kisanseva2.R
import kotlinx.android.synthetic.main.activity_wallet_section.*


class GodownsActivity : AppCompatActivity() {
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_godowns)
        val mywebview = findViewById<View>(R.id.webView) as WebView
        
        val link = intent.extras!!.getString("url")
        mywebview.loadUrl(link)
        mywebview.settings.javaScriptEnabled = true
    }
}