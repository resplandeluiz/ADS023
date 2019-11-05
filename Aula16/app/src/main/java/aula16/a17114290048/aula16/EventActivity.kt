package aula16.a17114290048.aula16

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.MotionEvent
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class EventActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_event)

        val botao = findViewById(R.id.button) as Button
        botao.setOnClickListener {
            val toast = Toast.makeText(this, "onClick disparado...", Toast.LENGTH_SHORT)
            toast.show()
        }

        botao.setOnLongClickListener {
            val toast = Toast.makeText(this, "onLongClick disparado...", Toast.LENGTH_SHORT)
            toast.show()
            return@setOnLongClickListener true
        }

        botao.setOnTouchListener { view: View, motionEvent: MotionEvent ->
            val toast = Toast.makeText(this, "onTouch disparado...", Toast.LENGTH_SHORT)
            toast.show()
            return@setOnTouchListener true
        }

        val campo = findViewById(R.id.editText) as EditText
        campo.setOnFocusChangeListener { view: View, b: Boolean ->
            val toast = Toast.makeText(this, "onFocusChange disparado...", Toast.LENGTH_SHORT)
            toast.show()
        }


    }


}
